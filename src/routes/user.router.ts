import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {});
router.get("/:id", (req: Request, res: Response) => {});
router.post("/", (req: Request, res: Response) => {});
router.put("/", (req: Request, res: Response) => {});
router.patch("/", (req: Request, res: Response) => {});

export { router as userRouter };
