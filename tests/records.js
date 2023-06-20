import { dynamodbDoc } from "./dynamodb.js";





function create() {
    const params = {
        TableName: "Transactions",
        Item: {
            "transactionId": "tnx12345",
            "merchantId": "mer1234",
            "transactionDate": (new Date()).getMilliseconds(),
            "type": "auth",
            "paymentTarget": "valpay",
            "payouts": [2.1]
        }
    };
    dynamodbDoc.put(params, function(err, data) {
        if (err) {
            console.log(err);
            return
        }

        console.log("PutItem Succeeded", data);
    })
}

async function get(id) {
    const params = {
        TableName: "Transactions",
        Key: {
            "transactionId": "tnx12345",
            "merchantId": "mer1234"
        }
    };

    try {
        const data = await dynamodbDoc.get(params).promise()
        console.log(data);
        return data;

    } catch(err) {
        console.log(err);
    }
}

async function update() {

    const data = await get('tnx12345');
    if (data['Item'] === undefined){
        console.log('create new item')
    } else {
        const item = data['Item'];
        console.log('before', item.payouts);
        const payoutVal = 3.0;
        const updateParams = {
            TableName: "Transactions",
            Key: {
                "transactionId": 'tnx12345',
                "merchantId": 'mer1234',
            },
            UpdateExpression: "set #payouts = list_append (#payouts, :p)",
            ExpressionAttributeNames: {
                "#payouts": "payouts"
            },
            ExpressionAttributeValues: {
                ":p": [payoutVal]
            },
            ReturnValues: "ALL_NEW"
        }
        try {
            const updatedItem = await dynamodbDoc.update(updateParams).promise();
            console.log(updatedItem)
        } catch(err) {
            console.log(err);
        }
    }
 }
  
//( () => async () => await get('tnx1234') )()();

(() => async () => await update())()();

//create();

