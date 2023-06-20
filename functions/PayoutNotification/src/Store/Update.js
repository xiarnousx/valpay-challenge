import { dynamodbDoc } from "./DynamoDB.js";

const TABLE = process.env.TABLE;
const ENV = process.env.ENV;

export const update = async (payload) => {
    try {
        const params = {
            TableName: TABLE,
            Key: {
                "transactionId": payload.transactionId,
                "merchantId": payload.merchantId,
            },
            UpdateExpression: "set #payouts = list_append (#payouts, :p)",
            ExpressionAttributeNames: {
                "#payouts": "payouts"
            },
            ExpressionAttributeValues: {
                ":p": [payload.pay]
            },
            ReturnValues: "ALL_NEW"
        };
        
        const results = await dynamodbDoc.update(params).promise();
        
        // This statement should be replaced by a better logging module
        if (ENV === 'dev') {
            console.log("update", results);
        }

        results;
    } catch(err) {
        console.log(err);
    }
};
