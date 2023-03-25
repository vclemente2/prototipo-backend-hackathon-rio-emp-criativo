import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });