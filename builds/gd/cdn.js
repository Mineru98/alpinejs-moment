import plugin from "../../src/gd.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    