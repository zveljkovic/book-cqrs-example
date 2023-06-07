import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UserStore} from "../store/user-store";
import {GetAllUsersCommand} from "./get-all-users-command";

@CommandHandler(GetAllUsersCommand)
export class GetAllUsersCommandHandler implements ICommandHandler<GetAllUsersCommand> {
    constructor(private userStore: UserStore) {
    }

    async execute(command: GetAllUsersCommand) {
        console.log('Retrieving all users from store');
        return this.userStore.getAllUsers();
    }
}