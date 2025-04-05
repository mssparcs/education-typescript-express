import { apiRequest002, apiResponse003 } from "@shared/schema";
import { Router, Request, Response } from "express";
import { z } from "zod";

const liveClockRouter = Router();

liveClockRouter.post("/", async (req: Request, res: Response) => {
  try {
    const parseResult = apiRequest002.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: "Invalid or missing URL" });
      return;
    }

    const { url } = parseResult.data;

    let response;
    try {
      response = await fetch(url, { method: "GET", redirect: "manual" });
    } catch (fetchError) {
      console.error("Fetch failed:", fetchError);
      res.status(500).json({ error: "Failed to fetch the URL" });
      return;
    }

    const dateHeader = response.headers.get("Date");

    const responseData = { serverTime: dateHeader };
    const validation = apiResponse003.safeParse(responseData);

    if (!validation.success) {
      res.status(500).json({ error: "Invalid server time format" });
      return;
    }

    res.json(responseData);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch the URL" });
  }
});

export default liveClockRouter;
