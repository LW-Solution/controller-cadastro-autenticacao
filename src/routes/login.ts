import { Router  } from "express";
import ControllerLogin from "../controllers/ControllerLogin";

const router = Router();

router.post("/", ControllerLogin.login);

export default router;