const { Client, Collection } = require("discord.js");
const config = require("./config");
const Handler = require("./handler/main");

const client = new Client({
    intents: ["Guilds"]
});

client._fs = require("fs");

client.slashCommands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();

new Handler(client);

client.login(config.client.token)
    .then(() => {
        client.application.commands.set(client.slashCommands.map(x => x.data.toJSON()))
    })