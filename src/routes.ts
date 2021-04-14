import { Router } from 'express';
import TransactionController from './controllers/TransactionsController';


const routes = Router();

routes.get("/transactions", TransactionController.index);
routes.get("/transactions/:id", TransactionController.show);
routes.post("/transactions", TransactionController.create);

export default routes;