import express from "express";
import 'express-async-errors';
import "./database/connections";

import routes from './routes';
import errorHandler from "./errors/handler";

const app = express();
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(3333);
