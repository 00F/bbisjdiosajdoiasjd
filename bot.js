const Discord = require('discord.js');
const meercy = new Discord.Client();

const devs = ["320423357709549568"]; //الايدي حقك
const adminprefix = ["$"]; // البرفكس
meercy.on('message', message => {
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send(:white_check_mark:   ${argresult})
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(:white_check_mark:   ${argresult})
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(:white_check_mark:   ${argresult})
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/meercy");
      message.channel.send(:white_check_mark:)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :${argresult} `);
}
});
 client.login(process.env.MEERCY);
