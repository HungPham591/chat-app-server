import { SocketEvent } from './../../utils/Interface';

import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketGatewayService } from './socket-gateway.service';

@WebSocketGateway()
export class SocketGatewayGateway {
  constructor(private readonly socketGatewayService: SocketGatewayService) { }
  @WebSocketServer()
  server;

  @SubscribeMessage('connectToServer')
  async connectToServer(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    client.join(data);
  }

  @SubscribeMessage(SocketEvent.ON_TYPING)
  async onTyping(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToUser(message, SocketEvent.ON_TYPING, message.from);
  }

  @SubscribeMessage(SocketEvent.ON_FINISH_TYPING)
  async onFinishTyping(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToUser(message, SocketEvent.ON_FINISH_TYPING, message.from);
  }

  // @SubscribeMessage('onConnect')
  // async onConnect(@MessageBody() data: string) {

  // }

  // @SubscribeMessage('onDisconnect')
  // async onDisconnect(@MessageBody() data: string) {

  // }

  @SubscribeMessage(SocketEvent.SEND_MESSAGE)
  async sendMessage(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToUser(message, SocketEvent.SEND_MESSAGE, message.from);
  }

  @SubscribeMessage(SocketEvent.RECEIVE_MESSAGE)
  async onReceiveMessage(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToUser(message, SocketEvent.RECEIVE_MESSAGE, message.from);
  }

  @SubscribeMessage(SocketEvent.NEW_QUESTION)
  sendQuestion(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToAllUser(message, SocketEvent.NEW_QUESTION);
  }

  @SubscribeMessage(SocketEvent.FRIEND_REQUEST)
  sendFriendRequest(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToAllUser(message, SocketEvent.FRIEND_REQUEST);
  }

  @SubscribeMessage(SocketEvent.FRIEND_REQUEST_ACCEPT)
  onFriendRequestAccept(@MessageBody() data: string) {
    const message = this.socketGatewayService.convertMessageToObject(data);
    this.socketGatewayService.sendMessageToUser(message, SocketEvent.FRIEND_REQUEST_ACCEPT, message.from);
  }
}
