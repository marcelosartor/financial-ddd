import { Module } from '@nestjs/common';
import { MessagesImpl } from './infra/messages.impl';
import { MESSAGES } from './domain/interfaces/messages.interface';
import { SendMessageService } from './domain/services/send-message.service';

@Module({
    imports:[],
    providers:[
        { provide: MESSAGES, useClass: MessagesImpl},
        SendMessageService
    ],
    exports:[SendMessageService]

})
export class MessagesModule {}
