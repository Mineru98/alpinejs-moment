import plugin from "../../src/en-sg.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    