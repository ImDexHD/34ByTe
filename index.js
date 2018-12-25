const Discord = require('discord.js');
const client = new Discord.Client();
const config = new require("./config.json");
const moment = new require('moment');
//const ms= new require('ms');
const fs = require('fs');
require('./util/eventLoader')(client);

const log = (msg) => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if(err) console.log(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.elevation = function(message) {
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
    return permlvl;
  }
};

function clean(text) {
  if (typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}


// Warnings and ERRORS
//client.on('debug', e => {
//    console.log(e);
//});
client.on('warn', e => {
    console.log(e);
});
client.on('error', e => {
    console.log(e);
});

client.login(process.env.BOT_TOKEN);