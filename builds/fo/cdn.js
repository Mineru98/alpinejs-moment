import plugin from "../../src/fo.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    