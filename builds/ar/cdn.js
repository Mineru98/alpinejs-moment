import plugin from "../../src/ar.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    