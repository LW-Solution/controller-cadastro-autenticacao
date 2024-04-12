import { Router } from "express";
import { default as User} from "./user";
const router = Router();

router.use("/user",User);

export default router;