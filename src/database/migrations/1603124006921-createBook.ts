import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBook1603124006921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'book',
                columns:[
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "author",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "text",
                    },
                    {
                        name: "isbn",
                        type: "varchar",
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "real",
                        precision: 2,
                    },
                    {
                        name: "publication_date",
                        type: "numeric",
                    },
                ],
                
            }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('book')
    }

}
