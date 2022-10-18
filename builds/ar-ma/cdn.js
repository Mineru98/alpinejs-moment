import plugin from "../../src/ar-ma.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    