import 'dotenv/config';
import isOnline from 'is-online';
import fetch from 'node-fetch'

let isInternetDown = false;
let timeDown = 0;
let timeDownStart = 0;
let timeDownEnd = 0;

let discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

let start = true;

function sendDiscordMessage(message) {
  fetch(discordWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: message, username: 'Internet Monitor', avatar_url: 'https://i.imgur.com/4M34hi2.png' })
  });
}

setInterval(() => {
  isOnline().then(online => {
    if (online) {
      if (start) {
        sendDiscordMessage('Internet Monitor started');
        start = false;
      }
      if (isInternetDown) {
        timeDownEnd = Date.now();
        timeDown = timeDownEnd - timeDownStart;
        console.log('Internet is back up');
        console.log('Time down: ', timeDown);
        if (timeDown > 1000) {
          sendDiscordMessage('Internet was down for ' + timeDown / 1000 + 's');
        }
        isInternetDown = false;
        timeDownStart = 0;
        timeDownEnd = 0;
      }
    } else {
      if (!isInternetDown) {

        timeDownStart = Date.now();
        console.log('Internet is down');
        isInternetDown = true;
      }
    }
  });
}, 1000);
