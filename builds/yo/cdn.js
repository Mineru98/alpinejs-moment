import plugin from "../../src/yo.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    