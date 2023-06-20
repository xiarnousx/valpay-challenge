import { dynamodbDoc } from "./dynamodb.js"


async function all() {

    const params = {
        TableName: 'Transactions',
        IndexName: 'reportidx',
        KeyConditionExpression: '#mid = :mid AND #tnxdate BETWEEN :sdate AND :edate',
        ExpressionAttributeNames: {
            '#mid': 'merchantId',
            "#tnxdate": 'transactionDate'
        },
        ExpressionAttributeValues: {
            ':mid': 'mer1234',
            ':sdate': 1687219200000,
            ':edate': 1687305540000
        }
    }

    const results = await dynamodbDoc.query(params).promise();
    console.log(results);
    return results;
}

(() => async () => await all())()();

