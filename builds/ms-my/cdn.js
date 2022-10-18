import plugin from "../../src/ms-my.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    