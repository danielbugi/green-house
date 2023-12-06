const { MongoClient } = require('mongodb');

export const connectDb = async () => {
  const dbPassword = process.env.DB_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://dannyb222:${dbPassword}@cluster0.g9xxgkz.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
};
