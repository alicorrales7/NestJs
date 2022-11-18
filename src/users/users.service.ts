import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';
import { UserRepository } from './repository/user.repository';
import { userDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async loginS(user) {
    const uservalid = await this.userRepository.loginR(user);
    return uservalid;
  }

  async loginSA(username, password) {
    const uservalid = await this.userRepository.loginA(username, password);
    return uservalid;
  }

  async create(userDTO: userDTO): Promise<User[] | User> {
    const newUser = await this.userRepository.create(userDTO);
    return newUser;
  }

  async getUsername(username): Promise<User> {
    const newUser = await this.userRepository.findUser(username);
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
