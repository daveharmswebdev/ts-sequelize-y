import express, { Request, Response } from 'express';
import sequelize from './config/database';
import actorRoutes from './routes/actor.routes';
import connectToDatabase from './config/sequelize';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/actors', actorRoutes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
