import { create } from 'domain';
import { UserService } from './user.services';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post() 
    createUser(@Body() createUserDto: CreateUserDto) {  
        return this.userService.createUser(createUserDto);
    }

    @Delete(":id")
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id)
    }

    @Patch(":id")
    updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
}