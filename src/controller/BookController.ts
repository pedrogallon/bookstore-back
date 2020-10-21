import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup'
import Book from "../model/Book";

export default {

    async create(req: Request, res: Response) {

        const {
            name,
            author,
            description,
            isbn,
            image_url,
            price,
            publication_date
        } = req.body;

        const data = {
            name,
            author,
            description,
            isbn,
            image_url,
            price: parseFloat(price),
            publication_date
        }

        // console.log(typeof data.price);

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            author: Yup.string().required(),
            description: Yup.string().required(),
            isbn: Yup.string().required(),
            image_url: Yup.string().required(),
            price: Yup.number().required(),
            publication_date: Yup.date().required()
        });

        await schema.validate(data,{abortEarly: false});

        const repo = getRepository(Book);
        const book = repo.create(data);
        await repo.save(book);

        return res.status(201).json(book);
    },

    async getAll(req: Request, res: Response) {

        const repo = getRepository(Book);
        const books: Book[] = await repo.find();
        return res.json(books);

    },

    async getOne(req: Request, res: Response) {
        const { id } = req.params;

        const repo = getRepository(Book);
        const book: Book = await repo.findOneOrFail(id);
        return res.json(book);
    },
}