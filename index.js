import { Client, Attachment, RichEmbed } from 'discord.js';
import fs from 'fs';

fs.readdir('./commands', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;

        const command = require(`./commands/${file}`);
        console.log(`${file} loaded!`);
    });
})

Client.on('ready', () => {
    console.log('Ready!');
    console.log(`Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`);
})

Client.login(process.env.BOT_TOKEN);