import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { userDTO } from '../dto/user.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly UserModel: Model<UserDocument>,
  ) {}

  async loginR(user){
    const compare = await this.UserModel.findOne({"username": user.username})
    const result = bcrypt.compareSync(user.password, compare.password)
    console.log(result)
    return result;
  }

  async loginA(username:string, password:string){
    const compare = await this.UserModel.findOne({"username": username})
    const result = bcrypt.compareSync(password, compare.password)
    if (result === true){
      const  { name, _id} = compare
      const rest = {name, _id}
      return rest;
      
    }
    return null;
    
  }

  async create(userDTO: userDTO): Promise<User[] | User> {

    const newUser = await this.UserModel.insertMany(userDTO);
    return newUser;
  }

  async findUser(username): Promise<User> {
    const struc = { user: username };
    const user = await this.UserModel.findOne(struc);
    return user;
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
