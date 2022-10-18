import plugin from "../../src/fr-ca.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    