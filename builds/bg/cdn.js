import plugin from "../../src/bg.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    