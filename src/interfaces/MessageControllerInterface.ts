import {User} from "node-telegram-bot-api";

export default interface MessageControllerInterface {
    isValid(): boolean;

    getMessage(): string;

    getSender(): User;

    getSenderId(): number;
}