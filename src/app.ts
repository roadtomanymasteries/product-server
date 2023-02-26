import express from 'express';
import cors from 'cors';
import productsController from './controllers/products';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsController);

export default app;
