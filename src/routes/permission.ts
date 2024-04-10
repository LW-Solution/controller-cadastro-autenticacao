import { Router  } from "express";
import ControllerPermission from "../controllers/ControllerPermission";

const router = Router();

router.post("/", ControllerPermission.create);
router.get("/", ControllerPermission.getAll);
router.get("/byid/:id", ControllerPermission.getById);
router.put("/:id", ControllerPermission.update);
router.delete("/:id", ControllerPermission.delete);

export default router;
