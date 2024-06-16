import { Router  } from "express";
import ControllerLogin from "../controllers/ControllerLogin";

const router = Router();

router.post("/", ControllerLogin.login);
router.get("/verify", ControllerLogin.verify);

export default router;