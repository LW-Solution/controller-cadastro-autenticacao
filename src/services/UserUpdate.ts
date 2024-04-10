import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Permission } from "../entity/Permission";
import { In } from "typeorm";

type data = {
    id: number,
    name: string,
    email: string,
    password: string,
    permissionsId: number[],
}

class UserUpdate {
    async update(data: data) {
        try {
            const UserRepositorio = AppDataSource.getRepository(User);
            const user = await UserRepositorio.findOneBy({ id: data.id, });
            if (!user) {
                throw new Error("User not found");
            }
            user.user_name = data.name;
            user.email = data.email;
            user.password = data.password;
            const PermissionRepositorio = AppDataSource.getRepository(Permission);
            const permissions = await PermissionRepositorio.findBy({ id: In([data.permissionsId]),});
            user.permissions = permissions;
            await UserRepositorio.save(user);
            return user;
        } catch (error) {
            throw new Error("Error updating user");
        }
    }
}

export default new UserUpdate;