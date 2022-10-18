import plugin from "../../src/es-mx.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    