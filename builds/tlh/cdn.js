import plugin from "../../src/tlh.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    