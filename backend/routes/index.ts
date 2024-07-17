import { Router } from "express";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/api/user", userRoutes);

export default router;
