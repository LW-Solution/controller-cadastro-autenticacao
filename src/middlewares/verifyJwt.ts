import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../services/Jwt/JwtService';

export async function authenticateJWT(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    if (token) {
      const jwtData = JWTService.verify(token);
      if (typeof jwtData !== 'string' && 'uid' in jwtData) {
        console.log('ID do usuário:', jwtData.uid);
        next();
        return;
      }
    }
  }

  res.sendStatus(401);
}
