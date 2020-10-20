import {MigrationInterface, QueryRunner} from "typeorm";

export class insertBooks1603129510552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
        'INSERT INTO book (name, author, isbn, image_url, price, publication_date, description) values'
        +'("Do Mil ao Milhão", "Thiago Nigro", "8595083274", "https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg", 19.90, "2018-11-10" , "Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais. Por meio de dados e de sua própria experiência como investidor e assessor, Nigro mostra que a riqueza é possível para todos – basta estar disposto a aprender e se dedicar."),'
        +'("Breves respostas para grandes questões", "Stephen Hawking", "855100431X", "https://images-na.ssl-images-amazon.com/images/I/51mFadsuvLL._SX328_BO1,204,203,200_.jpg", 39.90 , "2018-11-01" , "m textos inéditos, o físico e autor do best-seller Uma breve história do tempo nos presenteia com seus pensamentos finais sobre as maiores perguntas da humanidade."),'
        +'("A Realidade de Madhu","Melissa Tobias","8542803175","https://images-na.ssl-images-amazon.com/images/I/41ILMqLHkpL._SX334_BO1,204,203,200_.jpg", 25.89 , "2020-04-10","Neste surpreendente romance de ficção científica, Madhu é abduzida por uma nave intergaláctica. A bordo da colossal nave alienígena, fará amizade com uma bizarra híbrida, conhecerá um androide que vai abalar seu coração e aprenderá lições que mudarão sua vida para sempre."),'
        +'("A revolução dos bichos","George Orwell","8535909559","https://images-na.ssl-images-amazon.com/images/I/51Qd+WSmRFL._SX321_BO1,204,203,200_.jpg", 23.90, "2007-01-10","Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos."),'
        +'("Admirável mundo novo","Aldous Leonard Huxley","8525056006","https://images-na.ssl-images-amazon.com/images/I/41IKTYiymKL._SX334_BO1,204,203,200_.jpg", 22.89 , "2014-01-01" ,"Um clássico moderno, o romance distópico de Aldous Huxley é incontornável para quem procura um dos exemplos mais marcantes da tematização de estados autoritários, ao lado de 1984, de George Orwell."),'
        +'("The Hobbit","J.R.R. Tolkien","8595084742","https://images-na.ssl-images-amazon.com/images/I/511+-lOOtsL._SX319_BO1,204,203,200_.jpg", 37.90 , "2013-09-30" ,"Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar."),'
        +'("Duna","Frank Herbert","857657313X","https://images-na.ssl-images-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg", 57.90, "2017-04-28" ,"Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2."),'
        +'("As Crônicas de Nárnia","C. S. Lewis","857827069X","https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg", 23.65 , "2009-02-08" ,"Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é O leão, a feiticeira e o guarda-roupa, escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como As crônicas de Nárnia. Nos últimos cinqüenta anos, As crônicas de Nárnia transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica.");'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM book WHERE isbn IN ("8595083274","855100431X","8542803175","8535909559", "8525056006","8595084742","857657313X","857827069X");');
    }

}
