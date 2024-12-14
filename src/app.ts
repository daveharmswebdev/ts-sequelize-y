import express from 'express';
import actorRoutes from './routes/actor.routes';
const app = express();
app.use(express.json());

app.use('/actors', actorRoutes);

export default app;
