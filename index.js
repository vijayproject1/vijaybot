
const Telegraf = require('telegraf')

var arr = [];

const bot = new Telegraf('1110421699:AAE8L56x_dq1zcXDcJvhanwMhXsSC3ds-FU')
bot.on('text', (ctx) => {
  arr.push(ctx.message.text)
  return  ctx.reply(arr)})


bot.launch()