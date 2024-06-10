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
    async verify(req: Request, res: Response): Promise<number | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN'> {
        
        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json({ error: 'Token not found' });
            return 401;
        }
        
        const data = JWTService.verify(token.replace("Bearer", "").trim());
        if (data === 'JWT_SECRET_NOT_FOUND' || data === 'INVALID_TOKEN') {
            return data;
        }

        console.log("data: ");
        console.log(data);
        res.status(200).json({ result: true });
        return data.uid;
    }
}

export default new ControllerLogin();