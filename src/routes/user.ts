import { Router } from "express";
import ControllerUser from "../controllers/ControllerUser";

const router = Router();

router.post("/", ControllerUser.create);
router.get("/", ControllerUser.getAll);
router.get("/byid/:id", ControllerUser.getById);
router.put("/:id", ControllerUser.update);
router.delete("/:id", ControllerUser.delete);
router.post("/login", ControllerUser.login);

export default router;