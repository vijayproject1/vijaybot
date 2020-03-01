
const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')

var arr = [];

const bot = new Telegraf('1101047308:AAGQMrfkXCWT_qHYV-tS8pUOuBXvIYvAJpM')
const telegram = new Telegram('1101047308:AAGQMrfkXCWT_qHYV-tS8pUOuBXvIYvAJpM');
// bot.on('text', (ctx) => {
//   arr.push(ctx.message.text)
//   return  ctx.reply(arr)})

bot.hears(['hi','Hi','Hello'], (ctx) => {
  arr.push(ctx.message.text)
 return telegram.sendContact(ctx.message.chat.id, 'phoneNumber', 'firstName', []) 
  //return  ctx.reply(ctx.message.chat.id)
})
bot.launch()