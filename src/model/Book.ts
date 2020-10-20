import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export default class Book{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    author: string;
    @Column()
    description: string;
    @Column()
    isbn: string;
    @Column()
    image_url: string;
    @Column()
    price: number;
    @Column()
    publication_date: Date;
}