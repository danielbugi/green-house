const { connectDb } = require('@/lib/db');

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await connectDb();
    const db = client.db();
    try {
      const productsCursor = await db
        .collection('products')
        .find()
        .sort({ _id: -1 });

      const products = await productsCursor.toArray();

      res.status(200).json({
        status: 'success',
        results: products.length,
        data: products,
      });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong: ', err });
    } finally {
      client.close();
    }
  }
};

export default handler;
