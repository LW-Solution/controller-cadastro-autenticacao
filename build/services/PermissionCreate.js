"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Permission_1 = require("../entity/Permission");
const data_source_1 = require("../data-source");
class CreatePermission {
    async create(data) {
        try {
            const permission = new Permission_1.Permission();
            permission.name = data.name;
            await data_source_1.AppDataSource.manager.save(permission);
            return permission;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new CreatePermission;
