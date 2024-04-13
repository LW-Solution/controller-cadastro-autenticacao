import { Controller, Post, Get, Put, Delete, Request, Response, Body, Path, Route } from 'tsoa';
import { User } from '../entity/User'; // Assuming User entity is defined here
import UserCreate from '../services/UserCreate';
import UserGet from '../services/UserGet';
import UserUpdate from '../services/UserUpdate';
import UserDelete from '../services/UserDelete';

@Route('user')
export default class UserController extends Controller {

  @Post('/')
  public static async create(@Body() data: any): Promise<User> {
    try {
      // Existing logic to convert permissionsId to numbers if it's an array
      if (data.permissionsId && Array.isArray(data.permissionsId)) {
        data.permissionsId = data.permissionsId.map(Number);
      }

      const user = UserCreate.create(data);
      return user; // Assuming UserCreate returns a User object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Get('/')
  public static async getAll(): Promise<User[]> {
    try {
      const users = await UserGet.getAll();
      return users;
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Get('{id}')
  public static async getById(@Path('id') id: number): Promise<User | undefined> {
    try {
      const user = await UserGet.getById(id);
      return user;
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Put('{id}')
  public static async update(@Path('id') id: number, @Body() data: any): Promise<User> {
    try {
      const user = await UserUpdate.update(data, id);
      return user; // Assuming UserUpdate returns a User object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }

  @Delete('{id}')
  public static async delete(@Path('id') id: number): Promise<User> {
    try {
      const user = await UserDelete.delete(id);
      return user; // Assuming UserDelete returns a User object
    } catch (error) {
      throw error; // Re-throw the error for Tsoa to handle
    }
  }
}