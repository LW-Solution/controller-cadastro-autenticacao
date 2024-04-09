import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class DeleteUser {
    async delete(id: number){
        const UserRepositorio = AppDataSource.getRepository(User);
        const user = await UserRepositorio.findOneBy({ id: id, });
        if (!user) {
            throw new Error("User not found");
        }
        await UserRepositorio.remove(user);
        return user;
    }
}

export default new DeleteUser; 