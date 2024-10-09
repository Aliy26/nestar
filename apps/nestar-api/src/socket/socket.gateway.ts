import { Logger } from "@nestjs/common";
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "ws";
import * as WebSocket from "ws";

interface MessagePaylod {
  event: string;
  text: string;
}

interface InfoPayload {
  event: string;
  totalClient: number;
}

@WebSocketGateway({ transports: ["websocket"], secure: false })
export class SocketGateway implements OnGatewayInit {
  private logger: Logger = new Logger("SocketEventsGateway");
  private summaryClient: number = 0;

  @WebSocketServer()
  server: Server;

  public afterInit(server: Server) {
    this.logger.verbose(
      `Socket Server Initialized & total: [${this.summaryClient}]`,
    );
  }

  handleConnection(client: WebSocket, ...args: any[]) {
    this.summaryClient++;
    this.logger.verbose(`Connection & total [${this.summaryClient}]`);

    const infoMsg: InfoPayload = {
      event: "info",
      totalClient: this.summaryClient,
    };
    this.emitMessage(infoMsg);
  }

  handleDisconnect(client: WebSocket) {
    this.summaryClient--;
    this.logger.verbose(`Disconnection & total [${this.summaryClient}]`);

    const infoMsg: InfoPayload = {
      event: "info",
      totalClient: this.summaryClient,
    };
    // client - disconnect
    this.broadCastMessage(client, infoMsg);
  }

  @SubscribeMessage("message")
  public async handleMessage(
    client: WebSocket,
    payload: string,
  ): Promise<void> {
    const newMessage: MessagePaylod = { event: "message", text: payload };
    this.logger.verbose(`NEW MESSAGE: ${payload}`);
    this.emitMessage(newMessage);
  }

  private broadCastMessage(
    sender: WebSocket,
    message: InfoPayload | MessagePaylod,
  ) {
    this.server.clients.forEach((client) => {
      if (client !== sender && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

  private emitMessage(message: InfoPayload | MessagePaylod) {
    this.server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }
}
