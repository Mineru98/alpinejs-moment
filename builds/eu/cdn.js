import plugin from "../../src/eu.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    