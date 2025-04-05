import express, { Request, Response } from "express";
import { apiRequest001, IMappingTable, mappingTableSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
const shortUrlRouter = express.Router();
const mappingTable: IMappingTable = {};

function makeRandomChar(): string {
  return 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'[Math.floor(Math.random() * 52)];
}

/// originalUrl을 shortCode로 변환
shortUrlRouter.post("/", (req: Request, res: Response) :undefined => {
  try {
    const parseResult = apiRequest001.parse(req.body);
    let shortCode: string;
    
    const alreadyExistingAlias = Object.entries(mappingTable).find(([_, o]) => o.originalUrl === parseResult.originalURL);
    
    if (alreadyExistingAlias !== undefined) {
      shortCode = alreadyExistingAlias[0];
    }
    else {
      do {
        shortCode = '____'.replace(/_/g, makeRandomChar);
      } while (mappingTable[shortCode]);
      mappingTable[shortCode] = {
        originalUrl: parseResult.originalURL,
        visits: 0,
      };
    }

    res.json({ shortCode });
  } catch (error) {
    console.error("Failed to generate short code:", error);
    res.status(500).json({ error: "Failed to generate short code" });
  }
});

/// 현재 mappingTable을 JSON으로 응답
shortUrlRouter.get("/stats", (req: Request, res: Response) => {
  try {
    let parseResult = mappingTableSchema.parse(mappingTable);
    res.json(parseResult);
  } catch (error) {
    console.error("Failed to parse mappingTable:", error);
    res.status(500).json({ error: "Failed to parse mappingTable" });
  }
});

const shortCodeSchema = z.object({
  shortCode: z.string(),
});

/// shortCode를 originalUrl로 리디렉션
shortUrlRouter.get("/", (req: Request, res: Response) => {
  try {
    const { shortCode } = shortCodeSchema.parse(req.query);
    const entry = mappingTable[shortCode];

    if (!entry) {
      const notFoundPath = path.join(__dirname, "../../public/404.html");
      res.status(404).sendFile(notFoundPath);
      return;
    }

    entry.visits += 1;
    res.redirect(entry.originalUrl);
    return;
  } catch (error) {
    console.error("Failed to redirect:", error);
    res.status(500).json({ error: "Failed to redirect" });
  }
});

export default shortUrlRouter;
