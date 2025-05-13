import {Message} from "node-telegram-bot-api";

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const moment = require('moment');
import {User} from "node-telegram-bot-api";
import MessageControllerFactory from "./controllers/MessageControllerFactory";

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});


bot.on('text', async (message: Message) => {

    const MessageController = MessageControllerFactory.create('text', message);



    if (MessageController.isValid()) {

        await bot.sendMessage(MessageController.getSenderId(), MessageController.getMessage());
    }

    const sender: User | undefined = message.from;


});

console.log('script complete')