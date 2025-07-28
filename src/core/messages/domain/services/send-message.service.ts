import { Inject, Injectable, Logger } from '@nestjs/common';
import { Messages, MESSAGES } from '../interfaces/messages.interface';
import { MessageDto } from '../dto/message.dto';

@Injectable()
export class SendMessageService {
    constructor(
        @Inject(MESSAGES)
        private readonly messenges: Messages,
      ) {}
    
      private readonly logger = new Logger(SendMessageService.name)
    
      async send(pMessage: MessageDto) {
        this.messenges.send(pMessage)
      }
}
