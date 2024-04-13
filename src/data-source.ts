import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import path from "path";
import { User } from "./entity/User";
import { Permission } from "./entity/Permission";

const envFile = process.env.NODE_ENV == 'production' ? '.env.prod' : '.env.dev';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST, //aqui teremos que colocar o endereço da rede interna quando for preciso
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true, // This will create the tables if they do not exist ONLY IN DEVELOPMENT
  logging: false,
  entities: [User, Permission],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});
