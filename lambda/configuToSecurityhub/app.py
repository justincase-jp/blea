import boto3
import json
import os

controlTowerHomeRegion = os.environ.get('controlTowerHomeRegion', '')
configurationAggregatorName = os.environ.get('configurationAggregatorName', '')
audit_account_id = os.environ.get('auditAccountId', '')
config = boto3.client('config')
config_ct_home = boto3.client('config', region_name=controlTowerHomeRegion)


def get_compliance_and_severity(new_status):
    # This function returns the compliance status and severity of the finding
    status = ['FAILED', 3.0, 30]
    if new_status == 'COMPLIANT':
        status = ['PASSED', 0, 0]
    return status


def map_config_findings_to_sh(args):
    # This function import findings from aws-config to securityhub
    new_findings = []
    finding_id = args[0]
    account_id = args[1]
    config_rule_name = args[2]
    resource_type = args[3]
    resource_id = args[4]
    region = args[5]
    new_status = args[6]
    new_recorded_time = args[7]
    old_recorded_time = args[8]
    config_rule_arn = args[9]
    compliance_status = get_compliance_and_severity(new_status)
    description = "config-{0}-Base".format(account_id)
    remediation_url = "https://console.aws.amazon.com/config/home?region=" + \
        region + "#/rules/rule-details/" + config_rule_name

    new_findings.append({
        "SchemaVersion": "2018-10-08",
        "Id": finding_id,
        "ProductArn": "arn:aws:securityhub:{0}:{1}:product/{1}/default".format(region, audit_account_id),
        "GeneratorId": config_rule_arn,
        # "AwsAccountId": account_id,
        "AwsAccountId": audit_account_id,
        "Types": [
            "Software and Configuration Checks/AWS Config Analysis"
        ],
        "CreatedAt": old_recorded_time,
        "UpdatedAt": new_recorded_time,
        "Severity": {
            "Product": compliance_status[1],
            "Normalized": compliance_status[2]
        },
        "Title": config_rule_name,
        "Description": description,
        'Remediation': {
            'Recommendation': {
                'Text': 'For directions on how to fix this issue, see the remediation action on the rule details page in AWS Config console',
                'Url': remediation_url
            }
        },
        'Resources': [
            {
                'Id': resource_id,
                'Type': resource_type,
                'Partition': "aws",
                'Region': region
            }
        ],
        'Compliance': {'Status': compliance_status[0]}
    })

    if new_findings:
        try:
            securityhub = boto3.client('securityhub', region_name=region)
            response = securityhub.batch_import_findings(Findings=new_findings)
            if response['FailedCount'] > 0:
                print(
                    "Failed to import {} findings".format(
                        response['FailedCount']))
        except Exception as error:
            print("Error: ", error)
            raise


def get_resource_name(
        resource_type: str,
        resource_id: str,
        account_id: str,
        config_aggregator_name: str) -> str:

    response = config_ct_home.list_aggregate_discovered_resources(
        ConfigurationAggregatorName=config_aggregator_name,
        ResourceType=resource_type,
        Filters={
            'AccountId': account_id,
            'ResourceId': resource_id,
        },
    )

    resource_name = list(
        filter(
            lambda rs: rs.get(
                'ResourceId',
                "") == resource_id,
            response['ResourceIdentifiers']))
    return resource_name[0].get('ResourceName') if len(
        resource_name) >= 1 else None


def parse_message(event):
    # This function parse the cloudwatch event to get required data for the
    # ingestion of finding in security hub
    finding_id = event['id']
    if event['detail']['messageType'] == 'ComplianceChangeNotification' and "securityhub.amazonaws.com" not in event['detail']['configRuleARN']:
        account_id = event['detail']['awsAccountId']
        config_rule_name = event['detail']['configRuleName']
        config_rule_arn = event['detail']['configRuleARN']
        resource_type = event['detail']['resourceType']
        resource_id = event['detail']['resourceId']
        region = event['detail']['awsRegion']
        new_status = event['detail']['newEvaluationResult']['complianceType']
        new_recorded_time = event['detail']['newEvaluationResult']['resultRecordedTime']
        if 'oldEvaluationResult' not in event['detail']:
            old_recorded_time = event['detail']['newEvaluationResult']['resultRecordedTime']
        else:
            old_recorded_time = event['detail']['oldEvaluationResult']['resultRecordedTime']

        resource_name = get_resource_name(
            resource_type=resource_type,
            resource_id=resource_id,
            account_id=account_id,
            config_aggregator_name=configurationAggregatorName)
        resource_id = resource_name if resource_name is not None else resource_id
        finding_id = "{0}-{1}-{2}-{3}".format(
            account_id, region, config_rule_name, resource_id)
        args = [
            finding_id,
            account_id,
            config_rule_name,
            resource_type,
            resource_id,
            region,
            new_status,
            new_recorded_time,
            old_recorded_time,
            config_rule_arn]
        map_config_findings_to_sh(args)

    else:
        print("Other Notification")


def lambda_handler(event, context):
    print(json.dumps(event))
    for record in event['Records']:
        parse_message(json.loads(record['Sns']['Message']))
    return {"statusCode": 200}
