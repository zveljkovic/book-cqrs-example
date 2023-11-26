import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserStore } from '../store/user-store';
import { GetAllUsersQuery } from './get-all-users-query';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler
  implements IQueryHandler<GetAllUsersQuery>
{
  constructor(private userStore: UserStore) {}

  async execute(command: GetAllUsersQuery) {
    console.log('Retrieving all users from store');
    return this.userStore.getAllUsers();
  }
}
