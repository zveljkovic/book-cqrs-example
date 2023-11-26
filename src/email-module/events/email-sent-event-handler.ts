import { UserCreatedEvent } from '../../user-module/events/user-created-event';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EmailSentEvent } from './email-sent-event';

@EventsHandler(EmailSentEvent)
export class EmailSentEventHandler implements IEventHandler<EmailSentEvent> {
  constructor() {}

  handle(event: EmailSentEvent) {
    console.log('Saving email for ' + JSON.stringify(event));
  }
}
