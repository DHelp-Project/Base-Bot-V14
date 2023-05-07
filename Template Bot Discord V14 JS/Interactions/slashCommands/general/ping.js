const { ButtonBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    execute(client, interaction) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor('Blue')
                .setDescription("Pong !")
            ],
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                    .setCustomId("ping")
                    .setLabel("ping :)")
                    .setStyle(ButtonStyle.Primary)
                )
            ]
        });
    }
}