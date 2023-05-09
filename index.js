const { Bot, webhookCallback } = require("grammy");
const express = require("express");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  bot.start(ChatBot.py);
}
