import express, { urlencoded } from "express";
import { createClient } from "redis";

import { AdminRoute } from "./routes/admin";

import cookieParser from "cookie-parser";

import cors from "cors";
import { UserAuth } from "./routes/usersign";
import { AdminAuth } from "./routes/adminsign";
import { UserRoute } from "./routes/user";

const app = express();
const client = createClient();

const PORT = 4000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

app.use("/admin", AdminRoute);
app.use("/auth", UserAuth);
app.use("/auth/admin", AdminAuth);
app.use("/user", UserRoute);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startServer();
