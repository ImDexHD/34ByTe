exports.run = function(client, message, args) {
  var argsresult = args.join(' ');
  message.delete();
message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  permName: "Moderator"
};

exports.help = {
  name: "say",
  description: "The bot will say the message",
  usage: "say <message>"
};
