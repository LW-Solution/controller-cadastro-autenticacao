import { Request, Response } from "express";
import UserUpdate from "../services/user/UserUpdate";
import UserCreate from "../services/user/UserCreate";
import UserGet from "../services/user/UserGet";
import UserDelete from "../services/user/UserDelete";
import AuthService from "../services/Auth/AuthService";

class ControllerUser {
    async create(request: Request, response: Response) {
        try {
            const data = request.body;
            if (data.permissionsId && Array.isArray(data.permissionsId)) {
                data.permissionsId = data.permissionsId.map(Number);
            }
            const user = UserCreate.create(data);
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getAll(request: Request, response: Response) {
        try {
            const users = await UserGet.getAll();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await UserGet.getById(Number(id));
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const data = request.body;
            const user = await UserUpdate.update(data, Number(id));
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await UserDelete.delete(Number(id));
            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }

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
    }}

export default new ControllerUser();