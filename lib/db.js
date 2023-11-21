const { MongoClient } = require('mongodb');

export const connectDb = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://dannyb222:Db19931993@cluster0.g9xxgkz.mongodb.net/?retryWrites=true&w=majority'
  );
  return client;
};
