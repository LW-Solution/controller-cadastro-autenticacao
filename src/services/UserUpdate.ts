import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

type data = {
    id: number,
    name: string,
    email: string,
    password: string,
}

class UpdateUser {
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
            await UserRepositorio.save(user);
            return user;
        } catch (error) {
            throw new Error("Error updating user");
        }
    }
}

export default new UpdateUser;