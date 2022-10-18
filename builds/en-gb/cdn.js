import plugin from "../../src/en-gb.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    