const Discord = require('discord.js');
const moment = require("moment")
const cooldown = new Set()
const segundosCooldown = 5;
module.exports.run = (client, message) => {

if(message.channel.id != '768466399798231070') return message.reply("Esse comando só pode ser executado no chat <#768466399798231070>").then(msg => msg.delete({timeout: 7000}))
if(cooldown.has(message.author.id)){
      return message.channel.send(`Espere ${segundosCooldown} segundos para usar o comando novamente.`)
      
    } cooldown.add(message.author.id);
  
  setTimeout(()=> {
    cooldown.delete(message.author.id)
  
  },segundosCooldown * 1000)
moment.locale('pt-br')
    let online = message.guild.members.cache.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.cache.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.cache.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.cache.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.cache.filter(a => a.type === "voice").size;
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`🤑 Informações do servidor: **${message.guild.name}**`)
        .setColor("#0051FF")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .addField('  ⏩ Dono do servidor:', `<@${message.guild.owner.id}>`)
        .addField('  ⏩ Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField(`  ⏩ Membros [${totalmembros}]`, ` Online: **${online}**\n Ausente: **${ausente}**\n Ocupado: **${ocupado}**\n Offline: **${offline}**\n Bots: ${bot}`)
        .addField(`  ⏩ Canais [${canaistexto+canaisvoz}]`, `Texto: **${canaistexto}**\n Voz: **${canaisvoz}**`)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL()}`)
				.setFooter("LM-BOTS, a loja de bot que cabe no seu investimento!", message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
}

module.exports.help = { 
    name: "info",
    aliases: ["infoserver"]
}