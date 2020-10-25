const Discord = require('discord.js')


exports.run = async (client, message, args) => {
if(message.channel.id != '768466399798231070') return message.reply("Esse comando só pode ser executado no chat <#768466399798231070>").then(msg => msg.delete({timeout: 7000}))
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Você nao tem permissao para utilzar esse comando!");
let anuncio = args.join(" ");
let canal = message.guild.channels.cache.get("768459245309919233")
if(!anuncio) return message.reply("Qual seria o anuncio?")

const embed = new Discord.MessageEmbed()
.setColor("#00FF6C")
.setTitle(`LM-BOTS`)
.addField("A noticia", `${anuncio}`)
.setFooter("LM-BOTS, a loja de bot que cabe no seu investimento!")
canal.send("@everyone").then(msg => msg.delete({timeout: 1000}))
canal.send(embed)
}
exports.help = {
    name: "anunciar"
}