import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class GetUser {
    async getAll(){
        const users = await AppDataSource.manager.find(User);
        return users;
    }

    async getById(id: number){
        const UserRepositorio = AppDataSource.getRepository(User);
        const user = await UserRepositorio.findOneBy({ id: id, });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}

export default new GetUser;