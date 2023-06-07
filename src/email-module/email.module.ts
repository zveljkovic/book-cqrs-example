import {Module} from '@nestjs/common';
import {EventHandlers, Events} from "./events";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
    imports: [CqrsModule],
    providers: [
        ...Events,
        ...EventHandlers
    ]
})
export class EmailModule {

}
