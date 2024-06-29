const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const berktoken = 'tokeni buraya yazıon'; 
const berkkanalid = ['kanal idleri buraya', 'kanal idleri buraya', 'kanal idleri buraya']; 

client.on('ready', () => {berkyaz(berkkanalid);});
  
  async function berkyaz(channelIds) {
    while (true) {
      for (const berkkanalid of channelIds) {
        const channel = client.channels.cache.get(berkkanalid);
        if (!channel) {
          console.log(`Kanal bulunamadı: ${berkkanalid}`);
        } else {
          try {await channel.sendTyping();} catch (error) {console.error(`Hatalı Kanal : ${berkkanalid}:`, error);}}}}}
  
  client.login(berktoken);