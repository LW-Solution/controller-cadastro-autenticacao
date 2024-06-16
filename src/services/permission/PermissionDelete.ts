import { Permission } from "../../entity/Permission";
import { AppDataSource } from "../../data-source";

class PermissionDelete {
    async delete(id: number) {
        try {
            const PermissionRepositorio = AppDataSource.getRepository(Permission);
            const permission = await PermissionRepositorio.findOneBy({ id: id, });
            if (!permission) {
                throw new Error("Permission not found");
            }
            await AppDataSource.manager.softRemove(permission);
            return permission;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default new PermissionDelete;