import {GetAllUsersCommand} from "./get-all-users-command";
import {CreateUserCommand} from "./create-user-command";
import {CreateUserCommandHandler} from "./create-user-command-handler";
import {GetAllUsersCommandHandler} from "./get-all-users-command-handler";

export const CommandHandlers = [GetAllUsersCommandHandler, CreateUserCommandHandler];
export const Commands = [GetAllUsersCommand, CreateUserCommand];