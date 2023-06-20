import { dynamodbDoc } from "./DynamoDB.js";

const TABLE = process.env.TABLE;
const ENV = process.env.ENV;
const QUERY_INDEX = process.env.QUERY_INDEX;

export const all = async (payload) => {
    try {
        const params = {
            TableName: TABLE,
            IndexName: QUERY_INDEX,
            KeyConditionExpression: '#mid = :mid AND #tnxdate BETWEEN :sdate AND :edate',
            ExpressionAttributeNames: {
                '#mid': 'merchantId',
                "#tnxdate": 'transactionDate'
            },
            ExpressionAttributeValues: {
                ':mid': payload.merchantId,
                ':sdate': parseInt(payload.startDate, 10),
                ':edate': parseInt(payload.endDate, 10)
            }
        }
    
        const results = await dynamodbDoc.query(params).promise();
        
        //@TODO a better logging module
        if(ENV === 'dev') {
            console.log(`fount items: ${results.items ? results.items.length() : 0}`)
        }
        
        return results.Items ? results.Items : [];
    } catch (err) {
        console.log(err);
    }
}
