import { Permission } from "../entity/Permission";
import { AppDataSource } from "../data-source";

class PermissionDelete {
    async delete(id: number){
        const PermissionRepositorio = AppDataSource.getRepository(Permission);
        const permission = await PermissionRepositorio.find({ where: { id: id, }});
        if (!permission) {
            throw new Error("Permission not found");
        }
        await PermissionRepositorio.remove(permission);
        return permission;
    }
}

export default new PermissionDelete;