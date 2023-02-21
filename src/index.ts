import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}..`);
});

app.get('/', (req, res) => {
  res.send('basic express scaffolding!uighuih');
});
app.get('/second', (req, res) => {
  res.send('rouasasste');
});

export default app;
