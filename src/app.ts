import express, { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import path from "path";
import { AppDataSource } from "./data-source";
import cors from "cors";
import  router  from './routes'; 


const envFile = process.env.NODE_ENV == "production" ? ".env.prod" : ".env.dev";

// Load the .env file
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Establish a connection to the database
/* AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  }); */

// Create an express application
const app = express();

app.use(express.json());

app.use(cors());

// Using the router to handle all requests
app.use(router);

// Using the router to publish Swagger + TSOA documentation
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("./swagger/swagger.json"))
  );
});

// Start the server listening on the specified port on the environment variable
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
