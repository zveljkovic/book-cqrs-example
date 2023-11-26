import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { Commands, CommandHandlers } from './commands';
import { UserStore } from './store/user-store';
import { Events } from './events';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [...Commands, ...CommandHandlers, ...Events, UserStore],
  exports: [...Events],
})
export class UserModule {}
