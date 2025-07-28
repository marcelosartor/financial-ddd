import { MessageDto } from "../dto/message.dto";

export const  MESSAGES = 'messages'

export interface Messages {
    send(message: MessageDto): void
}
