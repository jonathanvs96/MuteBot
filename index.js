require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "-";

client.login(process.env.BOT_TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("Listo para Arrancar!!");
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.member.roles.cache.some((r) => r.name === "El mas Cabroder")) {
    if (message.content === "-mute") {
      message.guild.channels.cache
        .find((c) => c.name == "Sala")
        .members.forEach((member) => {
          if (!member.roles.cache.some((r) => r.name === "El mas Cabroder")) {
            member.voice.setMute(true);
          }
        });
      message.reply("Mancos Muteados");
    } else if (message.content === "-unmute") {
      message.guild.channels.cache
        .find((c) => c.name == "Sala")
        .members.forEach((member) => {
          member.voice.setMute(false);
        });
      message.reply("Mancos Desmuteados");
    }
  }
});
