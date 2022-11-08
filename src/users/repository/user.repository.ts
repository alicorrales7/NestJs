import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { userDTO } from '../dto/user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly UserModel: Model<UserDocument>,
  ) {}

  async create(userDTO: userDTO): Promise<User[] | User> {
    const newUser = await this.UserModel.insertMany(userDTO);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findId(id): Promise<User> {
    const onlyOne = await this.UserModel.findById(id);
    return onlyOne;
  }

  async update(userDTO: userDTO, id) {
    const update = await this.UserModel.updateMany(id, userDTO);
    return update;
  }

  async delete(id) {
    const deleteUser = await this.UserModel.deleteMany(id);
    return deleteUser;
  }
}
