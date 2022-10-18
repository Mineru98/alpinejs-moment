import plugin from "../../src/my.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    