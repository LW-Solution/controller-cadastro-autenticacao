import { Controller, Post, Get, Put, Delete, Request, Response, Body, Path, Route } from 'tsoa';
import { Permission } from '../entity/Permission'; // Assuming Permission entity is defined here
import PermissionCreate from '../services/PermissionCreate';
import PermissionGet from '../services/PermissionGet';
import PermissionUpdate from '../services/PermissionUpdate';
import PermissionDelete from '../services/PermissionDelete';

@Route('permission')
export default class PermissionController extends Controller {

  @Post('/')
  public static async create(@Body() data: any): Promise<Permission> {
    try {
      const permission = await PermissionCreate.create(data);
      return permission; // Assuming PermissionCreate returns a Permission object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Get('/')
  public static async getAll(): Promise<Permission[]> {
    try {
      const permissions = await PermissionGet.getAll();
      return permissions;
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Get('{id}')
  public static async getById(@Path('id') id: number): Promise<Permission | undefined> {
    try {
      const permission = await PermissionGet.getById(id);
      return permission;
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Put('{id}')
  public static async update(@Path('id') id: number, @Body() data: any): Promise<Permission> {
    try {
      const permission = await PermissionUpdate.update(id, data);
      return permission; // Assuming PermissionUpdate returns a Permission object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Delete('{id}')
  public static async delete(@Path('id') id: number): Promise<Permission> {
    try {
      const permission = await PermissionDelete.delete(id);
      return permission; // Assuming PermissionDelete returns a Permission object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }
}