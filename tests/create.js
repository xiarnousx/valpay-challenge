import { dynamodbDoc } from "./dynamodb.js"

function create(id) {
    
    setTimeout(() => {
        const params = {
            TableName: "Transactions",
            Item: {
                "transactionId": "tnx123" + id,
                "merchantId": "mer1234",
                "transactionDate": Date.now(),
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
    }, 2000);
    
}

for (let i = 0; i < 10; i++) {
    create(i);
}