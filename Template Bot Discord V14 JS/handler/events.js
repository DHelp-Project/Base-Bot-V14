module.exports = class EventsHandler {
    constructor(handler) {
        this.handler = handler;
        this.handler.getFiles(__dirname + "/../events", this)
    }

    registerFile(file) {
        const event = require(file);
        this.handler.client.on(
            event.name,
            (...args) => {
                try {
                    event.execute(this.handler.client, ...args);
                } catch (e) {
                    console.log(e);
                }
            }
        );
        console.log(`Events - Reading ${event.name} event`)
        delete require.cache[require.resolve(file)];
    }
}