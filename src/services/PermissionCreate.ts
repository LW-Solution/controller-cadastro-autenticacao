import { Permission } from "../entity/Permission";
import { AppDataSource } from "../data-source";

type data = {
    name: string,
}

class CreatePermission {
    async create(data: data) {
        try {
            const permission = new Permission();
            permission.name = data.name;
            await AppDataSource.manager.save(permission);
            return permission;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default new CreatePermission;