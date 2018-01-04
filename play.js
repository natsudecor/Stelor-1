const Command = require('./Command')
const YoutubeStream = require('ytdl-core')


module.exports = class Play extends Command {


    static match (message) {
        return message.content.startsWith('?play')
    }


    static action (message) {
        let voicechannel = message.guild.channels
            .filter(function (channel){ return channel.type === 'voice' })
            .first()
        let args = message.content.split(' ')
        voicechannel
            .join()
            .then(function (connection) {
            let stream = YoutubeStream(args[1])
            stream.on('error', function () {
                message.reply("Je n'ai pas réussi a lire cette vidéo :(")
                connection.disconnect()
            })
            connection
                .playStream(stream)
                .on('end', function () {
                connection.disconnect
                })
        })



    }


}