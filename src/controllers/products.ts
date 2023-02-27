import express from 'express';
import {
  getProductById,
  deleteProductById,
  getProducts,
  addNewProduct,
  reseed,
  Product,
  updateProductById,
} from '../repositories/products';

const router = express.Router();

router.get('/', (req, res) => {
  const { type, value } = req.query;
  const result = getProducts({
    type: type as keyof Product,
    value: value as string,
  });
  return res.status(200).json(result);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = getProductById(id);
  return res.status(200).json(result);
});

router.post('/', (req, res) => {
  const { id, description, model, brand } = req.body;
  const result = addNewProduct({ id, description, model, brand });
  return res.status(201).json(result);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { description, model, brand } = req.body;
  console.log(description, model, brand);
  const result = updateProductById({
    id,
    description,
    model,
    brand,
  });
  return res.status(200).json(result);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  deleteProductById(id);
  return res.status(200).json(true);
});

router.post('/reseed', (_, res) => {
  reseed();
  return res.status(200).json(true);
});

export default router;
