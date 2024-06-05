import { Router } from "express";
import { default as User} from "./user";
import { default as Permission} from "./permission";
import { default as Login} from "./login";

const router = Router();

router.use("/login",Login);
router.use("/user",User);
router.use("/permission",Permission);

export default router;