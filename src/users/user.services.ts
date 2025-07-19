import { CreateUserDto } from './dto/create-user.dto';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async getUsers() {
    const result = await this.userRepository.find();
    return {
      statusCode: HttpStatus.OK,
      data: result,
      message: 'Users retrieved successfully',
    };
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    const result = await this.userRepository.save(user);

    return {
      statusCode: HttpStatus.CREATED,
      data: result,
      message: 'User created successfully',
    };
  }

  async deleteUser(id: number) {
    const isIdThere = await this.userRepository.findOne({ where: { id } });
    if (!isIdThere) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userRepository.delete({ id });

    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = this.userRepository.merge(user, updateUserDto);
    const result = await this.userRepository.save(updatedUser);
    return {
      statusCode: HttpStatus.OK,
      data: result,
      message: 'User updated successfully',
    };
  }
}
