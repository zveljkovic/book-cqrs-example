import {UserCreatedEvent} from "../../user-module/events/user-created-event";
import {EventBus, EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {EmailSentEvent} from "./email-sent-event";

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
    constructor(private eventBus: EventBus) {}

    handle(event: UserCreatedEvent) {
        console.log('Sending User Created Email for ' + JSON.stringify(event.user));
        this.eventBus.publish(new EmailSentEvent(event.user, "UserCreated"))
    }
}
