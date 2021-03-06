/// VARIABLES

const Discord = require("discord.js");
const moment = require('moment');
const client = new Discord.Client();
var bot = new Discord.Client();

const PORT = process.env.PORT || 3000;

client.login(process.env.TOKEN);

const activities_list = [
    "Dire Smoot!",
    "MonOncleLand V3",
    "Manger une poutine", 
    "PlanetCoaster", 
    "EuroTruckSimulator 2",
    "SimAirport", 
    "Cities Skylines",
    "Minecraft",
    "Bonne année !",
    "Regarder le Live 24H",
    ];

function doMagic8BallVoodoo() {
    var rand = [':8ball: Oui !.', ':8ball: Non !', ':8ball: Je pense que oui...', ':8ball: Je pense que non...', ':8ball: Bien-sûr !', ':8ball: Impossible !.', ':8ball: C\'est vrai !', ':8ball: C\'est faux !', ':8ball: J\'en suis convaincu.', ':8ball: Je n\'en suis pas convaincu', ':8ball: Mes sources disent que non...', ':8ball: Mes sources disent que oui...', ':8ball: Mes théories le prouve !', ':8ball: Je pense qu\'une poutine a la réponse...', ':8ball: Mieux vaut ne pas te dire ça maintenant...', ':8ball: Je ne peux pas prédire ça maintenant...', ':8ball: Je ne sais pas, il faut demander à <@778308293776506920>'];
    return rand[Math.floor(Math.random()*rand.length)];
}

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 3000); // Runs this every 10 seconds.
});

client.on("message", (message) => {
    if (message.content.startsWith("!ip")) {
      message.channel.send("**Ip du serveur Minecraft :** Fermé pour le moment");
      message.channel.send("**Version :** 1.12 à 1.16.2");
      message.channel.send("**Cracks :** Acceptés");
    }
  });

client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'smoot') {
        const user = message.author;
        message.channel.send(message.author + ' est **Smoot!**', {
            files: [
                "./smoot.png"
            ]
        });
    }
});

client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'déçu') {
        message.channel.send('**Déçu!**', {
            files: [
                "./decu.gif"
            ]
        });
    }
});

client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'barbe') {
        message.channel.send('**Without Beard!**', {
            files: [
                "./barbe.png"
            ]
        });
    }
});

client.on('message', message => {
    var prefix = '!'
    var msg = message.content;

    if (msg === prefix + 'poutine') {
        message.channel.send('**Poutine!**', {
            files: [
                "./poutine.png"
            ]
        });
    }
});

client.on('message', msg => {
    var prefix = '!'
    if (msg.content.startsWith("!8ball")) {
        msg.channel.sendMessage(doMagic8BallVoodoo())
    }
});
