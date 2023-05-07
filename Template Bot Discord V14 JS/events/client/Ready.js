const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    execute() {
        console.log("le client est connecté")
    }
}