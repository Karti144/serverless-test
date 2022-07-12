'use strict';
const AWS = require('aws-sdk');

module.exports.delete = async (event) => {
  const body = JSON.parse((event.body).toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const id=body.id
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
   Key:{
    id
   }
  };
  await dynamoDb.delete(putParams).promise();

  return {
    statusCode: 200,
    message: "Deleted Successfully"
  };
};