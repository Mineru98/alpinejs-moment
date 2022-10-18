import plugin from "../../src/es-do.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    