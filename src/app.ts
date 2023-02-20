const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}..`);
});
app.use('/api/v1/products', 'productsController');

console.log('heehee');

export default app;
