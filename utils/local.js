require("dotenv").config();
const { Telegraf } = require("telegraf");
const ngrok = require("ngrok");

async function setWebhook() {
  const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN);
  const url = await ngrok.connect(3000);
  const res = await bot.telegram.setWebhook(`${url}/api`);
  if (res) console.log("Hook created at " + url);
}

setWebhook();
