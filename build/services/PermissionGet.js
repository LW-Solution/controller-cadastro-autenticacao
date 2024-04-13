"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Permission_1 = require("../entity/Permission");
const data_source_1 = require("../data-source");
class PermissionGet {
    async getById(id) {
        try {
            const PermissionRepositorio = data_source_1.AppDataSource.getRepository(Permission_1.Permission);
            const permission = await PermissionRepositorio.findOneBy({ id: id, });
            if (!permission) {
                throw new Error("Permission not found");
            }
            return permission;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAll() {
        const permissions = await data_source_1.AppDataSource.manager.find(Permission_1.Permission);
        return permissions;
    }
}
exports.default = new PermissionGet;
