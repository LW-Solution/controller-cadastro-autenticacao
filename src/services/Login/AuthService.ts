import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { JWTService } from '../Jwt/JwtService';
import { AppDataSource } from "../../data-source";



class AuthService {
  public async login(email: string, password: string): Promise<string> {

    //refatorar para aproveitar a função de UserGet
    const users = await AppDataSource.manager.find(User);
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
      return 'Email ou senha inválidos';
    }

    const token = JWTService.sign({ uid: user.id, role: user.permissions});
    if (!token) {
      return 'Erro ao gerar token';
    }

    return token;
  }
}
export default new AuthService();