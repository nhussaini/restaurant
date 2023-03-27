import Product from '@/models/Product';
import dbConnect from '@/util/mongo';

export default async function handler(req, res) {
  //connect to db
  dbConnect();
  const { method } = req;
  if (method === 'GET') {
  }
  if (method === 'POST') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
