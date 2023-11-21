const { connectDb } = require('@/lib/db');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Email is required' });
    }

    const client = await connectDb();
    const db = client.db();

    try {
      const insertedEmail = await db
        .collection('news-letter')
        .insertOne({ email });
      res.status(201).json({
        status: 'success',
        data: insertedEmail,
      });
    } catch (err) {
      res.status(400).json({
        status: 'failed',
        message: 'something went wrong',
        err,
      });
    } finally {
      client.close();
    }
  }
};

export default handler;
