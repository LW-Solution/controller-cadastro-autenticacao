import { Request, Response } from "express";
import UserUpdate from "../services/UserUpdate";
import UserCreate from "../services/UserCreate";
import UserGet from "../services/UserGet";
import UserDelete from "../services/UserDelete";

class ControllerUser {
    async create(request: Request, response: Response) {
        try {
            const data = request.body;
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
            const user = await UserUpdate.update(data);
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
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }
}

export default new ControllerUser();