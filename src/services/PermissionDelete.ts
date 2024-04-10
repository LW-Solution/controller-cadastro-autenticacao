import { Permission } from "../entity/Permission";
import { AppDataSource } from "../data-source";

class PermissionDelete {
    async delete(id: number){
        try {
            const PermissionRepositorio = AppDataSource.getRepository(Permission);
        const permission = await PermissionRepositorio.find({ where: { id: id, }});
        if (!permission) {
            throw new Error("Permission not found");
        }
        await PermissionRepositorio.remove(permission);
        return permission;
        } catch (error: any) {  
            throw new Error(error.message);
        }
    }
}

export default new PermissionDelete;