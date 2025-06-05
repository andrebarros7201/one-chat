import express from "express";
import "dotenv/config"; // Load env variables

const app = express();

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Server started on port: ${process.env.PORT ?? 3000}`);
});
