import { Permission } from "../entity/Permission";
import { AppDataSource } from "../data-source";

type data = {
    name: string,
}


class PermissionUpdate { 
    async update(id: number, data: data){
        const PermissionRepositorio = AppDataSource.getRepository(Permission);
        const permission = await PermissionRepositorio.findOneBy({ id: id, });
        if (!permission) {
            throw new Error("Permission not found");
        }
        permission.name = data.name;
        await PermissionRepositorio.save(permission);
        return permission;
    }
}

export default new PermissionUpdate;