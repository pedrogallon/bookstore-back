import { Router } from 'express'
import BookController from './controller/BookController';
import multer from 'multer'

const routes = Router();

const upload = multer();
routes.post("/books", upload.none(), BookController.create);
routes.get("/books", BookController.getAll);
routes.get("/books/:id", BookController.getOne)

export default routes;