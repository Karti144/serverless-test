'use strict';
const AWS = require('aws-sdk');

module.exports.get = async (event) => {
  
  const params = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
  };
  getData(params).then((data)=>{
  return {
    statusCode :  201,
    message: "Data found",
    data: data
  };
  }).catch((err)=>{
      return {
    statusCode :  500,
    message: err,
  };
  })


};
async function getData(params){
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return new Promise((resolve, reject)=>{
        const data= await dynamoDb.scan(params).promise()
 .then(data => {            
     const customer = [];
     for (let i = 0; i < data.Items.length; i++) {
        console.log("data.items",data.Items[i], data.Items.length)
        customer.push({
             id: data.Items[i].id,
             name: data.Items[i].name,
         });        
     }
     console.log("customer", customer)         
     resolve(customer)
    })
 .catch(err => {
     console.log(err)
     reject(err)
 })
    })
}