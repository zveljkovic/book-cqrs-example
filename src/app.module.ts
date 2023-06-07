import { Module } from '@nestjs/common';
import { UserModule } from './user-module/user.module';
import { EmailModule } from './email-module/email.module';

@Module({
  imports: [UserModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
