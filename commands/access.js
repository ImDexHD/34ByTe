exports.run = function(client, message, args) {
  //Roles
  let user = message.mentions.users.first();
  let bossRole = message.guild.roles.find("name", "Boss");
  let coownerRole = message.guild.roles.find("name", "Discord Manager");
  let headAdminRole = message.guild.roles.find("name", "Admin");
  let adminRole = message.guild.roles.find("name", "Super Moderator");
  let modRole = message.guild.roles.find("name", "Moderator");
  let selRole = message.guild.roles.find("name", "Seller");
  let preRole = message.guild.roles.find("name", "Premium");
  // Roles
  if(message.mentions.users.size < 1){
    let permlvl = 0;
    
    if(message.member.roles.has(preRole.id)){
      permlvl = 1;
    }
    if(message.member.roles.has(selRole.id)){
      permlvl = 2;
    }
    if(message.member.roles.has(modRole.id)){
      permlvl = 3;
    }
    if(message.member.roles.has(adminRole.id)){
      permlvl = 4;
    }
    if(message.member.roles.has(headAdminRole.id)){
      permlvl = 5;
    }
    if(message.member.roles.has(coownerRole.id)){
      permlvl = 6;
    }
    if(message.member.roles.has(bossRole.id)){
      permlvl = 7;
    }
        if(permlvl === 7){
        return message.channel.send(`Your access level is ${permlvl} (**Boss**)`);
      } else if(permlvl === 6){
        return message.channel.send(`Your access level is ${permlvl} (**Discord Manager**)`);
      } else if(permlvl === 5){
        return message.channel.send(`Your access level is ${permlvl} (**Admin**)`);
      } else if(permlvl === 4){
        return message.channel.send(`Your access level is ${permlvl} (**Super Moderator**)`);
      } else if(permlvl === 3){
        return message.channel.send(`Your access level is ${permlvl} (**Moderator**)`);
      } else if(permlvl === 2){
        return message.channel.send(`Your access level is ${permlvl} (**Seller**)`);
      } else if(permlvl === 1){
        return message.channel.send(`Your access level is ${permlvl} (**Premium**)`);
      } else if(permlvl === 0){
        return message.channel.send(`Your access level is ${permlvl} (**Member**)`);
      }
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
  name: "access",
  description: "Show the access level of you/someone",
  usage: "access [user]"
};
