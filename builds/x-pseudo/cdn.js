import plugin from "../../src/x-pseudo.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    