import { User } from '../entities/user.entity';
import {
  CreateUserDTO,
  UpdateUserDTO,
} from './../../infra/controllers/user/user.dto';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  create(user: CreateUserDTO): Promise<User>;
  update(id: string, user: UpdateUserDTO): Promise<User>;
  delete(id: string): Promise<void>;
}
