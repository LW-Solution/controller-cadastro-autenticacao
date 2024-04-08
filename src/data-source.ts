import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true, // This will create the tables if they do not exist ONLY IN DEVELOPMENT
    logging: false,
    entities: [
        "src/entity/*.ts"
      ],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
