

import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

type data = {
    name: string,
    email: string,
    password: string,
    permissionsId: number[],
}

class CreateUser {
    async create(data: data) {
        try {
            const user = new User();
            user.user_name = data.name;
            user.email = data.email;
            user.password = data.password;
            const PermissionRepositorio = AppDataSource.getRepository(Permissions);
            const permissions = await PermissionRepositorio.findBy({ id: In([1, 2, 3]) });
            user.permissions = permissions;
            await AppDataSource.manager.save(user);
            return user;
        } catch (error) {
            throw new Error("Error creating user");
        }
    }
}

export default new CreateUser;  