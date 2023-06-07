import {UserCreatedEventHandler} from "./user-created-event-handler";
import {EmailSentEventHandler} from "./email-sent-event-handler";
import {EmailSentEvent} from "./email-sent-event";

export const Events = [EmailSentEvent];
export const EventHandlers = [UserCreatedEventHandler, EmailSentEventHandler];
