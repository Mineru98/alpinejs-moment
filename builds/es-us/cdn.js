import plugin from "../../src/es-us.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    