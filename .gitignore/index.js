const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDQ1NTc3NzM5OTI4NjAwNTc2.DdsgJQ.hugw2ocERhxXqei1c7g4R-Xfj6c')

bot.on('message', function (message) { 
if (message.content === 'Bonjour') {
    message.reply ('Hey comment vas tu ?')
}
} )

bot.on ('message' ,function (message) {
    if (message.content === 'salut') {
        message.channel.send('Hey mon khey')
    }
})

bot.on('ready', function() {
    bot.user.setGame('JetBot, '/help);
    console.log('Le Bot est désormais connecté');
});

bot.on ('message', function(message) {
    if (message.content === 'help') {
        message.channel.send('Les commandes seront bientot disponibles ;)')
    }
})


