const { Events } = require("discord.js");

module.exports = {
    name: Events, // Le nom de l'event que vous souhaitez utiliser. ex: Events.ChannelUpdate
    execute(client, param1, param2) {
        // faites ce que vous voulez ici. les params sont suivants la documentation de l'event
        // par exemple pour ChannelUpdate --> param1 = oldChannel | param 2 = newChannel
    }
}