const Discord = require('discord.js')
const cooldown = new Set()
const segundosCooldown = 5;
exports.run = (client, message) => {

if(message.channel.id != '768466399798231070') return message.reply("Esse comando só pode ser executado no chat <#768466399798231070>").then(msg => msg.delete({timeout: 7000}))
if(cooldown.has(message.author.id)){
      return message.channel.send(`Espere ${segundosCooldown} segundos para usar o comando novamente.`)
      
    } cooldown.add(message.author.id);
  
  setTimeout(()=> {
    cooldown.delete(message.author.id)
  
  },segundosCooldown * 1000)
 const embed = new Discord.MessageEmbed()
.setColor("#00FF6C")
 .setTitle("LM-BOTS")
 .addField("Quer ver os preços né?", "Tudo bem! segue os preços abaixo")
 .addField("<:lm_database:769608417035681873> 10 R$", "Bot simples")
 .addField("<:lm_database:769608417035681873> 20 R$", "Bot mediano!")
 .addField("<:lm_database:769608417035681873> 40 R$", "Bot para servidor de minecraft!")
 .setFooter("LM-BOTS, a loja de bot que cabe no seu investimento!", message.author.displayAvatarURL({dynamic: true}))
 message.channel.send(embed)
}
exports.help = {
    name: "precos"
}