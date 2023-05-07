module.exports = class ModalHandler{
    constructor(handler) {
        this.handler = handler;
        this.handler.getFiles(__dirname + "/../Interactions/modals", this)
    }

    registerFile(file) {
        const command = require(file);
        this.handler.client.modals.set(command.customId, command)
        console.log(`Modals - Reading ${command.customId} Modal`)
        delete require.cache[require.resolve(file)];
    }
}