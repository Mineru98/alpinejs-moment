import plugin from "../../src/fr-ch.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    