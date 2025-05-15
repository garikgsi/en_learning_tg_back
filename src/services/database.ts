import {Client, Result} from "pg"

require('dotenv').config();
export default class Database {

    private readonly client: Client;

    public constructor() {

        this.client = new Client({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: parseInt(process.env.DB_PORT || '5432'),
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
        });

        this.client.connect().then(() => {
            this.client.on('error', (err) => {

                throw new Error(`cannot connect to database ${process.env.DB_HOST}`);

            });
        })

    }


}