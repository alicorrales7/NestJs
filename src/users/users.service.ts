import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './repository/user.repository';
import { userDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDTO: userDTO): Promise<User[] | User> {
    const newUser = await this.userRepository.create(userDTO);
    return newUser;
  }

  async getAllUser(): Promise<User[]> {
    const getAll = await this.userRepository.findAll();
    return getAll;
  }

  async getOne(id): Promise<User> {
    const getone = await this.userRepository.findId(id);
    return getone;
  }

  async update(userDTO: userDTO, id) {
    const update = await this.userRepository.update(userDTO, id);
    return update;
  }

  async delete(id) {
    const deleteUser = await this.userRepository.delete(id);
    return deleteUser;
  }
}
