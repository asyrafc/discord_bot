const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', msg => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('tis!');
  }
  
  if (msg.content === 'haha delete this') {
    msg.delete()
    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    .catch(console.error);
  }
  
  if (msg.author.id === "235088799074484224") {
    if (msg.content.includes(":youtube:")) {
      msg.delete()
        .then(msg => console.log(`Deleted ${msg.content} from ${msg.author.username}`))
        .catch(console.error);
    }
  
    msg.embeds.forEach((embed) => {
        if(embed.title === "Queue for AYMJND") {
          console.log(embed.title);
        } else {
          msg.delete()
            .then(msg => console.log(`Deleted ${msg.content} from ${msg.author.username}`))
            .catch(console.error);
        }
    });
  }
});

client.login('NDM5NTg0NjUyOTQxMDY2MjUw.XeTuvQ.ICI6qKCzIyyU3PYe0D5PJNzlVnE');