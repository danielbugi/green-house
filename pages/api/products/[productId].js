const { connectDb } = require('@/lib/db');

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const query = req.query;
    const productName = query.productId.split('-').join(' ');

    const client = await connectDb();
    const db = client.db();

    try {
      const product = await db
        .collection('products')
        .findOne({ name: productName });

      res.status(200).json({
        status: 'success',
        product,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
