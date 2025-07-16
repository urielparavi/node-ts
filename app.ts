import express, { Request, Response, NextFunction } from 'express';

import todoRoutes from './routes/todo.js';

const app = express();

app.use(express.json());

app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'An error occurred!' });
});

app.listen(3000);
