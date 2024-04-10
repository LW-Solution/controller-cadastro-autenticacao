import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class UserDelete {
    async delete(id: number){
        try {
            const UserRepositorio = AppDataSource.getRepository(User);
        const user = await UserRepositorio.findOneBy({ id: id, });
        if (!user) {
            throw new Error("User not found");
        }
        await UserRepositorio.remove(user);
        return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default new UserDelete; 