import plugin from "../../src/hu.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    