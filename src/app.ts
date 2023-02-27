import express from 'express';
import cors from 'cors';
import productsController from './controllers/products';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsController);
app.use(errorHandler);

export default app;
