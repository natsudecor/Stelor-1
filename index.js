const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Play = require('./commands/play')


bot.on('ready', function (){
  //bot.user.setAvatar('./avatar.png').catch(console.error)
  //bot.user.setGame('En preparation').catch(console.error)
})


bot.on('message', function (message) {
  if (message.content === '?liste') {
    message.channel.send('Voici la liste: [?liste] [?quel est ton rapeur préféré?] [?quel est ton youtubeur préféré?] [?quel est le meilleur personnage dans mario?] [?presente toi]')
  }
  if (message.content === '?quel est ton rapeur préféré?') {
    message.channel.send('Orelsan !!: https://www.youtube.com/watch?v=2bjk26RwjyU')
  }
  if (message.content === '?quel est ton youtubeur préféré?') {
    message.channel.send('Serge Le Mytho: https://www.youtube.com/watch?v=Akr43ItM-lo')
  }
  if (message.content === '?quel est le meilleur personnage dans mario?') {
    message.channel.send('C est bien évidemment Luigi')
  }
  if (message.content === '?presente toi') {
    message.channel.send('Je suis un bot, Stelor, ce message est automatique après avoir utilisé la commande ci-dessus, vous pouvez acceder a la liste des commande avec celle ci: ?donne moi la liste des commandes')
  }
  let commandUsed = Google.parse(message) || Play.parse(message)
})


bot.login('Mzk4NTI5NTg1MzI4Njg1MDY5.DS_3HA.EvVBUkpzOAlH_b_6PZDI9aJgltE')