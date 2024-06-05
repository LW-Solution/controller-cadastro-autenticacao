import { Request, Response } from 'express';
import AuthService from '../services/Login/AuthService';
import { JWTService } from '../services/Jwt/JwtService';

class ControllerLogin {
    async login(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const token = await AuthService.login(email, password);
            if (token === 'Email ou senha inválidos') {
                return res.status(401).json({ error: token });
            }
            res.status(200).json({ token });
        } catch (error: any) {
            res.status(401).json({ error: error.message });
        }
    }
    public async verify(token: string): Promise<number | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN'> {
        const data = JWTService.verify(token);
        if (data === 'JWT_SECRET_NOT_FOUND' || data === 'INVALID_TOKEN') {
            return data;
        }

        console.log("data: ");
        console.log(data);

        return data.uid;
    }
}

export default new ControllerLogin();