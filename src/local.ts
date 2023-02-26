import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
