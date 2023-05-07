const { EmbedBuilder } = require("discord.js");
const { Events, BaseInteraction } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    execute(client, interaction) {
        if (interaction.isChatInputCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command)return interaction.reply({embeds: [new EmbedBuilder().setColor('Red').setDescription("commande introuvable !")]});
            command.execute(client, interaction);
        } else if (interaction.isAutocomplete()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command)return interaction.reply({embeds: [new EmbedBuilder().setColor('Red').setDescription("commande introuvable !")]});
            command.autoComplete(client, interaction);
        } else if (interaction?.customId.startWith("[no-check]")) {
            return
        } else if (interaction.isModalSubmit()) {
            const component = client.modals.get(interaction.customId);
            if (!component)return interaction.reply({embeds: [new EmbedBuilder().setColor('Red').setDescription("component introuvable !")]});
            component.execute(client, interaction);
        } else if (interaction.isButton()) {
            const component = client.buttons.get(interaction.customId);
            if (!component)return interaction.reply({embeds: [new EmbedBuilder().setColor('Red').setDescription("component introuvable !")]});
            component.execute(client, interaction);
        } else if (interaction.isAnySelectMenu()) {
            const component = client.selectMenus.get(interaction.customId);
            if (!component)return interaction.reply({embeds: [new EmbedBuilder().setColor('Red').setDescription("component introuvable !")]});
            component.execute(client, interaction);
        }
    }
}