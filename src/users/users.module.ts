import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.services";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entity/users.entity";


@Module({
    controllers: [UserController],
    providers:[UserService],
    imports:[
        TypeOrmModule.forFeature([Users]),
    ]
})
export class UsersModule {
    
}