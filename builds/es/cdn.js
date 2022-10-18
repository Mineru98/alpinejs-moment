import plugin from "../../src/es.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    