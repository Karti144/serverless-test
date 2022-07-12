'use strict';
const AWS = require('aws-sdk');

module.exports.get = async (event) => {
//   const body = JSON.parse((event.body).toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Key: {
      id: "karthi",
    },
  };
 const data= await dynamoDb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return {
        statusCode :  500,
        message: "Data not found",
        data: err
      };
    } else {
      console.log("Success", data.Item);
      return {
        statusCode :  201,
        message: "Data found",
        data: data
      };
    }
  });;

//   return {
//     statusCode :  201,
//     message: "Data found",
//     data: data
//   };
};