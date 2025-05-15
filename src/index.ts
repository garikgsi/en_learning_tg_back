import {Message} from "node-telegram-bot-api";
import TelegramBot from 'node-telegram-bot-api';
import MessageControllerFactory from "./controllers/MessageControllerFactory";
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.on('text', async (message: Message) => {

    const messenger = MessageControllerFactory.create('text', message);

    if (messenger.isValid()) {

        await bot.sendMessage(messenger.getSenderId(), messenger.getMessage());

    }

});

console.log('script complete');