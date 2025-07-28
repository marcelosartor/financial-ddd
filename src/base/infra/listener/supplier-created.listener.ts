import { Injectable, Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { SupplierCreatedEvent } from "src/base/domain/event/supplier-created.event";
import { MessageDto } from "src/core/messages/domain/dto/message.dto";
import { SendMessageService } from "src/core/messages/domain/services/send-message.service";

@Injectable()
export class SupplierCreatedListener {
  constructor(private readonly sendMessageService: SendMessageService) {}
  private readonly logger = new Logger(SupplierCreatedListener.name);

  @OnEvent('event.supplier-created')
  handleSupplierCreatedEvent(payload: SupplierCreatedEvent) {
    this.logger.log(`Novo fornecedor criado: ${payload.name}`);
    const mensagem: MessageDto = {
        title:'Fornecedor Criado',
        subTitle:`Fornecedor: ${payload.name}`,
        recipients:'',
        message:`
        Id: ${payload.supplierId}
        Fornecedor: ${payload.name}
        Data de criação: ${payload.createdAt}
        `,
        sender:'',
      }
    this.sendMessageService.send(mensagem)

  }
}