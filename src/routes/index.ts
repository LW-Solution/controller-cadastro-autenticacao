import { Router } from "express";
import { default as User} from "./user";
import { default as Permission} from "./permission";
const router = Router();

router.use("/user",User);
router.use("/permission",Permission);

export default router;