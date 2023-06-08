import {Body, Controller, Get, Post} from '@nestjs/common';
import {CommandBus} from "@nestjs/cqrs";
import {GetAllUsersCommand} from "../commands/get-all-users-command";
import {User} from "../entity/user";
import {CreateUserCommand} from "../commands/create-user-command";

@Controller('users')
export class UserController {
    constructor(private commandBus: CommandBus) {
    }

    @Get()
    async findAll() {
        return await this.commandBus.execute<GetAllUsersCommand, User[]>(new GetAllUsersCommand())
    }


    @Post()
    async create(@Body("id") id: number, @Body("name") name: string) {
        return await this.commandBus.execute<CreateUserCommand, User>(new CreateUserCommand(id, name));
    }
}

