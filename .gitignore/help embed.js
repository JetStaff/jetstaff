const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ('j/')
bot.login('NDQ1NTc3NzM5OTI4NjAwNTc2.Dd2A1w.gSvBWOBj9HWCjejhFX-Lg_OGMGc');
bot.login('NDQ1NTc3NzM5OTI4NjAwNTc2.DdsgJQ.hugw2ocERhxXqei1c7g4R-Xfj6c')

bot.on('ready', () =>{
    bot.user.setPresence({ game: { name: 'Être développer'}})
     console.log("Bot Ready !");
 
 })
 
bot.on('message', message => {
    if (message.content === prefix + 'help'){
        var embed = new Discord.RichEmbed()
            .addField('j/help', "Affiche les commandes")
            .addField('j/vote', 'Permet de voter pour le serveur')
            .addField('j/ip', 'Permet de voir les informations concernant le serveur')
            .addField('j/info', 'Permet de voir les informations concernant le Bot')
            .setColor('#01A9DB')
            .setFooter('Commande en développement !')
        .setColor('#1FE6B7')
        message.channel.sendEmbed(embed)
    }

});


bot.on('message', message => {
    if (message.content === prefix + 'vote'){
        var embed = new Discord.RichEmbed()
        .addField('Tu souhaites voter pour nous ?', "[Clique Ici !](https://minecraftpocket-servers.com/server/74087/vote/)")
        .setColor('#1FE6B7')
        message.channel.sendEmbed(embed)
    }

})

bot.on('message', message => {
    if (message.content === prefix + 'ip'){
        var embed = new Discord.RichEmbed()
        .addField('Ip & Port :', 'Ip  T10184.pocket.pe Port 10184')
        .addField('Version du serveur', '1.4.0')
        .addField('Voter pour le serveur', "[Clique Ici !](https://minecraftpocket-servers.com/server/74087/vote/)")
        .setColor('#1FE6B7')
        message.channel.sendEmbed(embed)
    }

})

bot.on('message', message => {
    if (message.content === prefix + 'info'){
        var embed = new Discord.RichEmbed()
        .addField('Voici les informations concernant le Bot', 'JetStaff')
        .addField('Version', '1.0')
        .addField('Développeur du Bot', '@LolkillV2')
        .addField('Serveur du Bot', 'JetCube V3')
        .addField('Etat du Bot', 'En développement')
        .setColor('#1FE6B7')
        message.channel.sendEmbed(embed)

    }
})
