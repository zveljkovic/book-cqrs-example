import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAllUsersQuery } from '../commands/get-all-users-query';
import { User } from '../entity/user';
import { CreateUserCommand } from '../commands/create-user-command';

@Controller('users')
export class UserController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Get()
  async findAll() {
    return await this.queryBus.execute<GetAllUsersQuery, User[]>(
      new GetAllUsersQuery(),
    );
  }

  @Post()
  async create(@Body('id') id: number, @Body('name') name: string) {
    return await this.commandBus.execute<CreateUserCommand, User>(
      new CreateUserCommand(id, name),
    );
  }
}
