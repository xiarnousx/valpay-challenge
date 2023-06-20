import AWS from 'aws-sdk';

export const dynamodb = new AWS.DynamoDB({
    endpoint: "http://localhost:8000",
    region: "local",
    accessKeyId: "something-special",
    secretAccessKey: "something-special"
});

export const dynamodbDoc = new AWS.DynamoDB.DocumentClient({
    endpoint: "http://localhost:8000",
    region: "local",
    accessKeyId: "something-special",
    secretAccessKey: "something-special"
})