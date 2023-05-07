module.exports = class SelectMenuHandler{
    constructor(handler) {
        this.handler = handler;
        this.handler.getFiles(__dirname + "/../Interactions/selectMenus", this)
    }

    registerFile(file) {
        const command = require(file);
        this.handler.client.selectMenus.set(command.customId, command)
        console.log(`selectMenus - Reading ${command.customId} SelectMenu`)
        delete require.cache[require.resolve(file)];
    }
}