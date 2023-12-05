const { connectDb } = require('@/lib/db');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (
      !name ||
      name.trim() === '' ||
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(400).json({
        status: 'failed',
        name: 'ValidationError',
        reason: 'Invalid Input',
        message: 'All the fields are required.',
      });
    }

    const newMessage = { email, name, message };

    let client;
    try {
      client = await connectDb();
    } catch (err) {
      res.status(500).json({
        message: 'Could not connect to database',
      });
      return;
    }

    const db = client.db();

    try {
      const message = await db.collection('messages').insertOne(newMessage);
      res.status(201).json({
        message: 'Message was sent successfully.',
        data: message,
      });
    } catch (err) {
      client.close();
      res.status(500).json({
        message: 'There was a problem with sending the message.',
      });
      return;
    }

    client.close();
  }
};

export default handler;
