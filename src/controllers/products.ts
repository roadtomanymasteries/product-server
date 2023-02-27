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

router.get('/', (req, res, next) => {
  try {
    const { type, value } = req.query;
    const result = getProducts({
      type: type as keyof Product,
      value: value as string,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const result = getProductById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { id, description, model, brand } = req.body;
    const result = addNewProduct({ id, description, model, brand });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const { description, model, brand } = req.body;
    const result = updateProductById({
      id,
      description,
      model,
      brand,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    deleteProductById(id);
    res.status(200).json(true);
  } catch (error) {
    next(error);
  }
});

router.post('/reseed', (_, res, next) => {
  try {
    reseed();
    res.status(200).json(true);
  } catch (error) {
    next(error);
  }
});

export default router;
