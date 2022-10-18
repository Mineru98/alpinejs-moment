import plugin from "../../src/de-at.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    