import { Message } from './entities/message.entities';
import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { BaseService } from './../base/base.service';

@Injectable()
export class SocketGatewayService extends BaseService {
    @WebSocketServer()
    server: Server;

    convertMessageToObject(msg: string): Message {
        const message: Message = JSON.parse(msg);
        return message;
    }
    async sendMessageToAllUser(msg: Message, event: string) {
        this.server.emit(event, msg);
    }
    async sendMessageToUser(msg: Message, event: string, userSend: string) {
        this.server.to(userSend).emit(event, msg);
    }
    async sendNotificationToUser(event: string, userSend: string) {
        this.server.emit(event);
    }
    async sendNotificationToAllUser(event: string) {
        this.server.emit(event);
    }
    // async sendNotificationToGroup(event: string) {

    // }
}
