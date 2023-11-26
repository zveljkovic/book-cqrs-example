import { User } from '../../user-module/entity/user';

export class EmailSentEvent {
  constructor(public readonly user: User, public readonly type: string) {}
}
