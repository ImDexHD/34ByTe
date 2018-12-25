exports.run = function(client, message, args) {
  let mentionedMember = message.author;
  let verRole = client.guilds.get(message.guild.id).roles.find('name', 'Member');
  let unRole = client.guilds.get(message.guild.id).roles.find('name', 'Unknown');
  if(message.channel.name === "✅verification"){
    message.guild.member(mentionedMember).addRole(verRole).then(()=> {
      mentionedMember.send(`You have been verified in ${message.guild.name}\nTo enter the chat click >> <#524647747606020116> <<`);
      message.guild.member(mentionedMember).removeRole(unRole)
      return message.delete();
    });   
  } else {
    mentionedMember.send("You are already verified");
    return message.delete();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "verify",
  description: "verify",
  usage: "verify"
};
