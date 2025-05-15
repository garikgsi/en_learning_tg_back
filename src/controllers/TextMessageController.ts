import {Message} from "node-telegram-bot-api";
import BaseMessageController from "./BaseMessageController";
import TextMessenger from "../services/TextMessenger";


export default class TextMessageController extends BaseMessageController {

    private messenger:TextMessenger;

    constructor(private readonly message: Message) {
        super(message);

        this.messenger = new TextMessenger();
    }

    getMessage(): string {

        return this.messenger.reply(this.message);

    }


}