const express = require("express");

const app = express();

app.use(express.json());

import userRouter from './router/userRouter';

app.use('/api/', userRouter);

import cartRouter from './router/cartRouter';

app.use('/api/', cartRouter);

import productRouter from './router/productRouter';

app.use('/api/', productRouter);

export default app;