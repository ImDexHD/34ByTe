module.exports = (client, guild, role) => {
  let Log = client.guild.channels.find('name', 'lukki-log');
  console.log(`${role} was just deleted!`);
};