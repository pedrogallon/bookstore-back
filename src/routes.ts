import { Router } from 'express'
import BookController from './controller/BookController';

const routes = Router();

routes.post("/books", BookController.create);
routes.get("/books", BookController.getAll);
routes.get("/books/:id", BookController.getOne)

export default routes;