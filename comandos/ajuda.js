const Discord = require('discord.js')
const config = require('../config.json')
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
    .setTitle(`Meus comandos (${config.prefix})`)
    .addField("precos", "Mostrarei os preços dos produtos")
    .addField("sugestão", "Sugerir algo para a loja")
    .addField("ping", "Mostrará meu ping")
		.addField("cat", "Mostrarei fotos de gatinhos")
		.addField("queimar", "Queime seu amigo que você odeia!")
		.addField("info", "informações sobre o servidor")
		.addField("botinfo", "informações sobre o bot (Estilo tecnico)")
		.setFooter("LM-BOTS, a loja de bot que cabe no seu investimento!", message.author.displayAvatarURL({dynamic: true}))

    message.channel.send(embed)
}
exports.help = {
    name: "help"
}