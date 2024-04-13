"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerPermission_1 = __importDefault(require("../controllers/ControllerPermission"));
const router = (0, express_1.Router)();
router.post("/", ControllerPermission_1.default.create);
router.get("/", ControllerPermission_1.default.getAll);
router.get("/byid/:id", ControllerPermission_1.default.getById);
router.put("/:id", ControllerPermission_1.default.update);
router.delete("/:id", ControllerPermission_1.default.delete);
exports.default = router;
