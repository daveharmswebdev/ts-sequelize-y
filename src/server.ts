import app from './app';
import connectToDatabase from './config/sequelize';

const port = 3000;

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
