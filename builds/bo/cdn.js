import plugin from "../../src/bo.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    