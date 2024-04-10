import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class UserGet {
    async getAll(){
        const users = await AppDataSource.manager.find(User);
        return users;
    }

    async getById(id: number){
        try {
            const UserRepositorio = AppDataSource.getRepository(User);
            const user = await UserRepositorio.findOne({ relations: ["permissions"], where: {id: id, }});
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default new UserGet;