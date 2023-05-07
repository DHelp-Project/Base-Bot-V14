const { EmbedBuilder } = require("discord.js")

module.exports = {
    customId: "ping",
    execute(client, interaction) {
        interaction.reply({
            content: "Clique !",
            ephemeral: true
        })
    }
}