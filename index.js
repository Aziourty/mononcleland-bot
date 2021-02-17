/// VARIABLES

const Discord = require("discord.js");
const discordBotkit = require('botkit-discord');
const discordBot = discordBotkit(configuration);
const moment = require('moment');
const client = new Discord.Client();
var bot = new Discord.Client();

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
        message.channel.send('**Smoot!**', {
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






function doMagic8BallVoodoo() {
    var rand = [':8ball: Oui !.', ':8ball: Non !', ':8ball: Je pense que oui...', ':8ball: Je pense que non...', ':8ball: Bien-sûr !', ':8ball: Impossible !.', ':8ball: C\'est vrai !', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on('message', msg => {
    if (command === "!8ball") {
        msg.channel.sendMessage(doMagic8BallVoodoo())
    }
});