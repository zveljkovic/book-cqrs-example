import { GetAllUsersQuery } from './get-all-users-query';
import { CreateUserCommand } from './create-user-command';
import { CreateUserCommandHandler } from './create-user-command-handler';
import { GetAllUsersQueryHandler } from './get-all-users-query-handler';

export const CommandHandlers = [
  GetAllUsersQueryHandler,
  CreateUserCommandHandler,
];
export const Commands = [GetAllUsersQuery, CreateUserCommand];
