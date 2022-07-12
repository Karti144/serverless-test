'use strict';
const AWS = require('aws-sdk');

module.exports.createCustomer = async (event) => {
  const body = JSON.parse((event.body).toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      id: body.name,
      name: body.name,
      email: body.email,
    },
  };
  await dynamoDb.put(putParams).promise();

  return {
    statusCode: 201,
  };
};