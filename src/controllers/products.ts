import express from 'express';
import { mockProductData } from '../../db/products';
import {
  getProductById,
  deleteProductById,
  getProducts,
} from '../repositories/products';
import { updateProductById } from '../services/products';
import { Product } from '../services/products';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const { type, value } = req.query;
    const result = getProducts({
      type: type as keyof Product,
      value: value as string,
    });
    res.status(200).json(result);
  } catch (error) {
    throw new Error(error as string);
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = getProductById(id);
  return res.status(200).json(result);
});

router.post('/', (req, res) => {
  const { id, description, model, brand } = req.body;
  mockProductData.push({ id, description, model, brand });
  return res.status(201).json(true);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { description, model, brand } = req.body;

  const result = updateProductById({
    id,
    product: { id, description, model, brand },
  });
  res.status(200).json(result);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = deleteProductById(id);
  return res.status(200).json(result);
});

export default router;
