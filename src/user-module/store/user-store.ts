import {User} from "../entity/user";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserStore {
    private users: User[] = [{id: 1, name: "Zed"}];

    public addUser(user: User) {
        this.users.push(user);
        console.log('User added to store');
    }

    public getAllUsers() {
        return [...this.users];
    }

    public getUserById(id: number) {
        return this.users.find(x => x.id === id);
    }

}