import CreateUser from "../services/CreateUser";
import GetUser from "../services/GetUser";
import DeleteUser from "../services/DeleteUser";
import  UpdateUser from "../services/UpdateUser";
import { Request, Response } from "express";

class ControllerUser {
    async create(request: Request, response: Response) {
        try {
            const { name, email, password } = request.body;
            const user = CreateUser.create({ name, email, password });
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getAll(request: Request, response: Response) {
        try {
            const users = await GetUser.getAll();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await GetUser.getById(Number(id));
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, email, password } = request.body;
            const user = await UpdateUser.update({ id: Number(id), name, email, password });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const user = await DeleteUser.delete(Number(id));
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }
}

export default new ControllerUser();