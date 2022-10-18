import plugin from "../../src/it-ch.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    