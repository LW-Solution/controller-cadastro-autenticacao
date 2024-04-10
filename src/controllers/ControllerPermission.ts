import { Request, Response } from 'express';
import  PermissionCreate  from '../services/PermissionCreate';
import  PermissionDelete from '../services/PermissionDelete';
import  PermissionGet  from '../services/PermissionGet';  
import  PermissionUpdate  from '../services/PermissionUpdate';

class ControllerPermission {
    async create(request: Request, response: Response) {
        try {
            const data = request.body;
            const permission = await PermissionCreate.create(data);
            return response.status(201).json(permission);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getAll(request: Request, response: Response) {
        try {
            const permissions = await PermissionGet.getAll();
            return response.status(200).json(permissions);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const permission = await PermissionGet.getById(Number(id));
            return response.status(200).json(permission);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const data = request.body;
            const permission = await PermissionUpdate.update(Number(id), data);
            return response.status(200).json(permission);
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const permission = await PermissionDelete.delete(Number(id));
            return response.status(200).json(permission);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export default new ControllerPermission();