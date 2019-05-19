const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("579301324437323801")
setInterval(function() {
channel.send(`3eal wallh t3bt mn alspam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);