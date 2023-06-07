import {CommandHandler, EventBus, ICommandHandler} from "@nestjs/cqrs";
import {UserStore} from "../store/user-store";
import {User} from "../entity/user";
import {UserCreatedEvent} from "../events/user-created-event";
import {CreateUserCommand} from "./create-user-command";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
    constructor(private userStore: UserStore, private eventBus: EventBus) {
    }

    async execute(command: CreateUserCommand) {
        const {id, name} = command;
        const user = new User();
        user.id = id;
        user.name = name;
        this.userStore.addUser(user);
        this.eventBus.publish(new UserCreatedEvent(user));
        return user;
    }
}