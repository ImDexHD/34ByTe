const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let modLog = client.channels.find('name', '34byte-log');
  let sentchannel = message.channel.name
  if(!modLog) return message.reply("I can not find the '34byte-log' channel!");
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Purge')
  .addField('Channel:', `#${sentchannel}`)
  .addField('Messages Deleted:', `${parseInt(args.join(' '))}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  message.author.reply("Successfully purged " + messagecount + " messages.");
  return client.channels.get(modLog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delete'],
  permLevel: 5,
  permName: "Admin"
};

exports.help = {
  name: "purge",
  description: "Purges X amount of messages for a given channel.",
  usage: "purge <number>"
};
