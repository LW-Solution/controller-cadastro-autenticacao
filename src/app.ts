import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import  router  from './routes'; 

dotenv.config();

const app = express();

app.use(express.json());

AppDataSource.initialize();

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});