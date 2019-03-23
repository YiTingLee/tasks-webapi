const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongodbClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  console.log('Connected correctly!');

  const db = client.db(databaseName);
  db.collection('users').insertOne({
    name: 'Eric',
    age: 25
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user');
    }
    console.log(result.ops);
  })
});
