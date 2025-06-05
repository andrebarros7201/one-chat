import express from "express";
import "dotenv/config"; // Load env variables

import {router as messageRouter} from './routes/messageRouter'

const app = express();

app.use("/api/message", messageRouter);

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Server started on port: ${process.env.PORT ?? 3000}`);
});
