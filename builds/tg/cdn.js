import plugin from "../../src/tg.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    