import { Request, Response } from 'express';
import AuthService from '../services/Login/AuthService';

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
}