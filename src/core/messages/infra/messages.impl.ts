import { Injectable } from "@nestjs/common";
import { Messages } from "../domain/interfaces/messages.interface";
import { MessageDto } from "../domain/dto/message.dto";

@Injectable()
export class MessagesImpl implements Messages {

    send(message: MessageDto): void {
        console.log('------------------------------------------------')
        console.log(' Enviando mensagem                              ')
        console.log('------------------------------------------------')
        console.log(message.title.toUpperCase())
        console.log(message.subTitle)
        console.log('------------------------------------------------')
        console.log(message.message)
        console.log('------------------------------------------------')
    }
}


