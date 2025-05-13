import {Message} from "node-telegram-bot-api";
import BaseMessageController from "./BaseMessageController";
import moment from "moment";


export default class TextMessageController extends BaseMessageController {

    constructor(private readonly message: Message) {
        super(message);
    }

    getMessage(): string {
        return `your message: messageId=${this.message.message_id}, text:${this.message.text}, date=${moment.unix(this.message.date).format('YYYY-MM-DD HH:mm:SS')}`;
    }


}