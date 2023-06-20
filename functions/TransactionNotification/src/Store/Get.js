import { dynamodbDoc } from "./DynamoDB.js";

const TABLE = process.env.TABLE;
const ENV = process.env.ENV;

export const get = async (payload) => {
    try {
        const params = {
            TableName: TABLE,
            Key: {
                "transactionId": payload.transactionId,
                "merchantId": payload.merchantId
            }
        };
        const data = await dynamodbDoc.get(params).promise()
        
        // This statement should be replaced by a better logging module
        if (ENV === 'dev') {
            console.log("get", data);
        }
        
        return data['Item'] ? data['Item'] : null;
    } catch(err) {
        console.log(err);
    }
};