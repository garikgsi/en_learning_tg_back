import MessageControllerInterface from "../interfaces/MessageControllerInterface";
import TelegramBot, {Message, User} from "node-telegram-bot-api";

export default class BaseMessageController implements MessageControllerInterface {
    private readonly sender: User;

    public constructor(message: Message) {
        if (message.from) {

            this.sender = message.from;

            return;

        }

        throw new Error('sender is not valid');
    }

    getMessage(): string {
        return "base message text";
    }

    isValid(): boolean {

        if (this.sender.is_bot) {
            console.log('go away', this.sender.id);

            return false;
        }

        return true;

    }

    getSender(): TelegramBot.User {
        return this.sender;
    }

    getSenderId(): number {
        return this.sender.id;
    }
}