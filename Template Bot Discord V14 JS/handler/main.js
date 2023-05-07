const ModalHandler = require("./Modals");
const ButtonsHandler = require("./buttons");
const EventsHandler = require("./events");
const SelectMenuHandler = require("./selectMenus");
const SlashCommandsHandler = require("./slashcommands");

module.exports = class Handler {
    constructor(client) {
        this.client = client;
        new EventsHandler(this);
        new SlashCommandsHandler(this);
        new ModalHandler(this);
        new ButtonsHandler(this);
        new SelectMenuHandler(this);
    }

    getFiles(path, handler) {
        this.client._fs.readdir(path, (err, files) => {
            if (err) throw err;
            files.map((file) => {
                if (file.endsWith(".disabled.js")) return;
                if (file.endsWith(".js"))
                    return handler.registerFile(`${path}/${file}`);
                if (!file.includes(".")) this.getFiles(`${path}/${file}`, handler);
            })
        });
    }
}
