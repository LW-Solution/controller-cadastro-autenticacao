import { Permission } from "../entity/Permission";
import { AppDataSource } from "../data-source";

class PermissionGet {
    async getById(id: number){
        const PermissionRepositorio = AppDataSource.getRepository(Permission);
        const permission = await PermissionRepositorio.findOneBy({ id: id, });
        if (!permission) {
            throw new Error("Permission not found");
        }
        return permission;
    }

    async getAll(){
        const permissions = await AppDataSource.manager.find(Permission);
        return permissions;
    }   
}

export default new PermissionGet;