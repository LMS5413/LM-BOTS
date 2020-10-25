const Discord = require('discord.js')
const cooldown = new Set()
const segundosCooldown = 5;
exports.run = (client, message) => {


if(cooldown.has(message.author.id)){
	if(message.channel.id != '768466399798231070') return message.reply("Esse comando só pode ser executado no chat <#768466399798231070>").then(msg => msg.delete({timeout: 7000}))
      return message.channel.send(`Espere ${segundosCooldown} segundos para usar o comando novamente.`)
      
    } cooldown.add(message.author.id);
  
  setTimeout(()=> {
    cooldown.delete(message.author.id)
  
  },segundosCooldown * 1000)
    message.channel.send(`O ping do bot é ${client.ws.ping}`)
}
exports.help = {
    name: "ping"
}