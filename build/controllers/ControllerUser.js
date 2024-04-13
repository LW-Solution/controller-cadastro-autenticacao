"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const UserCreate_1 = __importDefault(require("../services/UserCreate"));
const UserGet_1 = __importDefault(require("../services/UserGet"));
const UserUpdate_1 = __importDefault(require("../services/UserUpdate"));
const UserDelete_1 = __importDefault(require("../services/UserDelete"));
let UserController = class UserController extends tsoa_1.Controller {
    static async create(data) {
        try {
            // Existing logic to convert permissionsId to numbers if it's an array
            if (data.permissionsId && Array.isArray(data.permissionsId)) {
                data.permissionsId = data.permissionsId.map(Number);
            }
            const user = UserCreate_1.default.create(data);
            return user; // Assuming UserCreate returns a User object
        }
        catch (error) {
            throw error; // Re-throw the error for Tsoa to handle
        }
    }
    static async getAll() {
        try {
            const users = await UserGet_1.default.getAll();
            return users;
        }
        catch (error) {
            throw error; // Re-throw the error for Tsoa to handle
        }
    }
    static async getById(id) {
        try {
            const user = await UserGet_1.default.getById(id);
            return user;
        }
        catch (error) {
            throw error; // Re-throw the error for Tsoa to handle
        }
    }
    static async update(id, data) {
        try {
            const user = await UserUpdate_1.default.update(data, id);
            return user; // Assuming UserUpdate returns a User object
        }
        catch (error) {
            throw error; // Re-throw the error for Tsoa to handle
        }
    }
    static async delete(id) {
        try {
            const user = await UserDelete_1.default.delete(id);
            return user; // Assuming UserDelete returns a User object
        }
        catch (error) {
            throw error; // Re-throw the error for Tsoa to handle
        }
    }
};
__decorate([
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController, "create", null);
__decorate([
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController, "getAll", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    __param(0, (0, tsoa_1.Path)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController, "getById", null);
__decorate([
    (0, tsoa_1.Put)('{id}'),
    __param(0, (0, tsoa_1.Path)('id')),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController, "update", null);
__decorate([
    (0, tsoa_1.Delete)('{id}'),
    __param(0, (0, tsoa_1.Path)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController, "delete", null);
UserController = __decorate([
    (0, tsoa_1.Route)('user')
], UserController);
exports.default = UserController;
