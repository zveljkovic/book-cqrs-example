import {User} from "../entity/user";

export class UserCreatedEvent {
    constructor(
        public readonly user: User
    ) {}
}
