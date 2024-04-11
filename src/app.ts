import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import router from "./routes";

console.log("AQUI",process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.prod" });
} else {
  dotenv.config({ path: ".env.dev" });
}

// Establish a connection to the database
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// Create an express application
const app = express();

app.use(express.json());

// Using the router to handle all requests
app.use(router);

// Start the server listening on the specified port on the environment variable
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
