import { dynamodbDoc } from "./DynamoDB.js";

const TABLE = process.env.TABLE;
const ENV = process.env.ENV;

export const insert = async (payload) => {
    try {
        const params = {
            TableName: TABLE,
            Item: {
                "transactionId": payload.transactionId,
                "merchantId": payload.merchantId,
                "transactionDate": Date.now(),
                "type": payload.type,
                "paymentTarget": payload.paymentTarget,
                "payouts": [payload.pay]
            }
        };
        
        await dynamodbDoc.put(params).promise();
        
        // This statement should be replaced by a better logging module
        if (ENV === 'dev') {
            console.log("put", params);
        }

    } catch(err) {
        console.log(err);
    }
};
