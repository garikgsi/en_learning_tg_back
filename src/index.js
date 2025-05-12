const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const moment = require('moment');

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});


bot.on('text', async (ctx) => {

  console.log('message received', ctx);

  await bot.sendMessage(ctx.from.id, `your message: messageId=${ctx.message_id}, text:${ctx.text}, date=${moment.unix(ctx.date).format('YYYY-MM-DD HH:mm:SS')}`);

});

console.log('script complete')