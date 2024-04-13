"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const User_1 = require("./entity/User");
const Permission_1 = require("./entity/Permission");
const envFile = process.env.NODE_ENV == 'production' ? '.env.prod' : '.env.dev';
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), envFile) });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Permission_1.Permission],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});
