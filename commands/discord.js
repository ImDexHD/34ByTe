exports.run = function(client, message, args) {
message.author.send("** 34ByTe Invite:** https://discord.gg/zW9rPCh");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link','invite'],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "discord",
  description: "Official Server Invite",
  usage: "discord"
};
