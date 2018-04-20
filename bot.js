const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("porn on pornhub", {type: "WATCHING"});

 });


bot.on("message", async message => {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;

 let prefix = botconfig.prefix;
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);

 if(cmd === `${prefix}Serverinfo`){


   let sicon = message.guild.displayAvatarURL;
   let serverembed = new Discord.RichEmbed()
   .setDescription("Server informatie")
   .setColor("#15f153")
   .setThumbnail(sicon)
   .addField("Server naam", message.guild.name)
   .addField("Gemaakt op", message.guild.createdAt)
   .addField("Jij bent gejoint op", message.member.joinedAt)
   .addField("Totale members", message.guild.memberCount);

   return message.channel.send(serverembed);
  }


 if(cmd === `${prefix}Hallo`){
    return message.channel.send("Hallo, Ik ben de NaniBot, ik kan vanalles voor je doen. Test het maar uit! :)")
  }


 if(cmd === `${prefix}Botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("*NaniBot informatie*")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot:", bot.user.username);

    return message.channel.send(botembed);
  }


  if(cmd === `${prefix}Bedreig`){
     return message.author.send("Ik weet waar je woont, ik traceer je IP al heel lang. Denk niet dat je je kunt verstoppen.")
  }

  if(cmd === `${prefix}Natteboter`){
     return message.channel.send("Natte boter kopen? www.NatteBoterMerkens.nl, of wilt u toch liever een *rugale* verkrachting? Contacteer dan Leandro.")
  }

  if(cmd === `${prefix}Spaghetti`){
     return message.channel.send("Wil je graag spaghetti cum eten van een pizza bakker? *(www.spaghetticumLascialfari.it)* Of contacteer Davide")
  }

  if(cmd === `${prefix}Thee`){
     return message.channel.send("Wil jij lekker genieten van een Theetje en waterpijp? Kom dan snel naar 'Nickurs zijn thee/waterpijp/hentai Paleis' En krijg met de kortingscode Boter' 20% korting!")
  }

  if(cmd === `${prefix}Paars`){
     return message.channel.send("Wow wow wow, stop eens ff. Denk je nou echt dat ik ga praten over dat DING? Nou dan heb je helemaal gelijk. Laat me u voorstellen aan www.fitnessvoorkinderen.nl, de beste plaats voor kinderen met zware obesitas. Totdat de resultaten te zien zijn, raad ik u aan om uw kind of ander dagelijks voorwerp elke dag met de auto naar zijn/haar bestemming te brengen. Daarnaast raad ik ook een ontbijt, lunch en diner aan van de McDonald's. Ik hoop dat dit u helpt, tot straksies!")
  }

  if(cmd === `${prefix}Huissen`){
     return message.channel.send("Huissen is een huis in de provincie Gelderlandt. De stad heeft 5.4 inwoners. Huissen kreeg op zijn laatst in 492 v.c huisrechten. Huissen is de kleinste plaats in de gemeente en ligt aan de Nedernein, in het gebied tussen Nijhem en Armegen.")
  }

  if(cmd === `${prefix}Viggo`){
     return message.channel.send("***1.*** Hallo, mijn naam is Vinegar. Ik vind het heel leuk om cum te eten en om de nsfw bot te gebruiken in mijn kast (waar ik binnenkort uit ga komen). Soms doe ik ook voor de lol spider-man na of eet ik spinnen. En mannen. Ik ben namelijk heel erg ga-- oeps, dat was een geheimpje. ***2.*** (Hier nog wat informatie over mijn soort: Het (tamme) varken (Sus scrofa domesticus, Sus domesticus) is een zoogdier uit de familie der varkens (Suidae). In 1777 publiceerde Johann Christian Polycarp Erxleben de wetenschappelijke naam Sus domesticus voor het gedomesticeerde varken, als de naam voor een soort. Veel auteurs beschouwen het tamme varken echter als een gedomesticeerd wild zwijn (Sus scrofa Linnaeus, 1758) en benoemen het als een ondersoort daarvan. In dat geval is de wetenschappelijke naam Sus scrofa domesticus Erxleben, 1777. ***3.*** Kom je er nou nog steeds niet uit? Ga dan naar: Varkens.nl | Hét platform voor de varkenshouderij)")
   }

     if(cmd === `${prefix}Walrus`){
        return message.channel.send("ZOEK DEKKING, DAAR KOMT WEER DE OH-ZOVEELSTE BOM! Boem Phew, we hebben het net overleefd. We hebben hier zegmaar een probleem met oost-indische walrussen. Ze vinden het blijkbaar leuk om mensen te bomben. Ze hebben al vele belangrijke plekken gebombed, zoals Huissen, delen van Italië, en zelfs een stuk van naziland. Och, die Afghaantjes toch.")
    }

    if(cmd ===`)


});

client.login(process.env.BOT_TOKEN);
