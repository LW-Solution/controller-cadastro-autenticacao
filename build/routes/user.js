"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerUser_1 = __importDefault(require("../controllers/ControllerUser"));
const router = (0, express_1.Router)();
router.post("/", ControllerUser_1.default.create);
router.get("/", ControllerUser_1.default.getAll);
router.get("/byid/:id", ControllerUser_1.default.getById);
router.put("/:id", ControllerUser_1.default.update);
router.delete("/:id", ControllerUser_1.default.delete);
exports.default = router;
