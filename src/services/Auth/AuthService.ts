import { getRepository } from 'typeorm';
import { User } from '../../entity/User';
import { JWTService } from '../Jwt/JwtService';

export class AuthService {
    public async login(email: string, password: string): Promise<string> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ where: { email } });

        const passwordMatch = user && user.password === password;
        if (!passwordMatch || !user) {
            return 'Email ou senha inválidos';
        }
        else {
            const token = JWTService.sign({ uid: user.id, role: user.permissions});
            if (token === 'JWT_SECRET_NOT_FOUND') {
                return 'Erro ao gerar token';
            }
            
            return token
        
        }

    }
}