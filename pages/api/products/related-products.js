const { connectDb } = require('@/lib/db');

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await connectDb();
    const db = client.db();

    try {
      const totalDocuments = await db.collection('products').countDocuments();

      const randomIndices = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * totalDocuments)
      );

      const relatedProducts = await Promise.all(
        randomIndices.map(async (index) => {
          return await db.collection('products').findOne({}, { skip: index });
        })
      );

      res.status(200).json({
        status: 'success',
        data: relatedProducts,
      });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong: ', err });
    } finally {
      client.close();
    }
  }
};

export default handler;
