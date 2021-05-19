const { Telegraf } = require("telegraf");
const { db } = require("../utils/firebase");

const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN);

bot.on("message", async (context) => {
  if (context.message.text?.toLowerCase().includes("oxxo")) {
    await db.collection("0xx0").doc(context.message.message_id.toString()).set(context.message);
    context.reply("💾");
  }
});

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
  } finally {
    res.status(200).end();
  }
};
