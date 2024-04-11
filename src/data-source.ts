import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entity/User";
import { Permission } from "./entity/Permission";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.prod" });
} else {
  dotenv.config({ path: ".env.dev" });
}

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
