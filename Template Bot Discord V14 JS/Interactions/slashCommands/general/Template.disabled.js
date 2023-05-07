const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder(), // Ajouter les détails de la commande ici (name et description minimum, ATTENTION: pas de majuscule ni d'espace)
    autoComplete(client, interaction) {
        // L'autoComplete est optionnel c'est seulement si vous souhaitez ajouter plus de 25 choix --> https://discordjs.guide/slash-commands/autocomplete.html#enabling-autocomplete
    },
    execute(client, interaction) {

    },
}