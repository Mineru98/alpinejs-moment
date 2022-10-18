import plugin from "../../src/nl.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    