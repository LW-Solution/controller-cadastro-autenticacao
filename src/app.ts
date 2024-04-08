import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source"


dotenv.config();

const app = express();

AppDataSource.initialize()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});