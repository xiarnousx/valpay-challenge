import { dynamodb } from './dynamodb.js';

const params = {
    TableName:  "Transactions",
    AttributeDefinitions: [
        {"AttributeName": "transactionId", "AttributeType": "S"},
        {"AttributeName": "merchantId", "AttributeType": "S"},
        {"AttributeName": "transactionDate", "AttributeType": "N"}
    ],

    KeySchema: [
        {"AttributeName": "merchantId", "KeyType": "HASH"},
        {"AttributeName": "transactionId", "KeyType": "RANGE"}
    ],

    LocalSecondaryIndexes: [
        {
            "IndexName": "reportidx",
            "KeySchema": [
                {"AttributeName": "merchantId", "KeyType": "HASH"},
                {"AttributeName":"transactionDate", "KeyType": "RANGE"}
            ],
            "Projection": {"ProjectionType": "ALL"}
        }
    ],
    
    ProvisionedThroughput: {
        "ReadCapacityUnits": 5,
        "WriteCapacityUnits": 5
    }
}

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log('error', JSON.stringify(err, null, 2));
        return;
    }

    console.log('created', JSON.stringify(data, null, 2));
})