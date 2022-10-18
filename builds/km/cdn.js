import plugin from "../../src/km.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    