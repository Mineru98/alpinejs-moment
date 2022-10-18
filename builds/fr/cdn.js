import plugin from "../../src/fr.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    