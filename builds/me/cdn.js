import plugin from "../../src/me.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    