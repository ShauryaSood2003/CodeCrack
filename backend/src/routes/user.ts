import { Router } from "express";
import prisma from "../db/db";
import userMiddleware from "../middleware/userauthin";
import { createClient } from "redis";
const client = createClient();
const route = Router();

route.get("/problemlist", async (req, res) => {
  try {
    const result = await prisma.problemList.findMany({});
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
  }
});

route.get("/problem/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await prisma.problemList.findMany({
      where: {
        id,
      },
    });
    return res.status(200).json(result);
  } catch (e) {
    console.log("Error: " + e);
  }
});

route.post("/submit", userMiddleware, async (req, res) => {
  try {
    // @ts-ignore
    const user: any = req.user;

    const { code, test, language } = req.body;

    await client.lPush(
      "problems",
      JSON.stringify({ code, test, user_id: user.id, language })
    );
    return res.status(200).json({ message: "Done!" });
  } catch (e) {
    console.log("Error: " + e);
  }
});

export { route as UserRoute };
