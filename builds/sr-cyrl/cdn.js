import plugin from "../../src/sr-cyrl.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    