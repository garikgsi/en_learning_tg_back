import {Message} from "node-telegram-bot-api";
import TextMessageController from "./TextMessageController";
import BaseMessageController from "./BaseMessageController";
import MessageControllerInterface from "../interfaces/MessageControllerInterface";

export default class MessageControllerFactory {
    public static create(messageType: string, message: Message): MessageControllerInterface {
        switch (messageType) {
            case 'text': {
                return new TextMessageController(message);
            } break;

            default: {
                return new BaseMessageController(message);
            }
        }
    };
}