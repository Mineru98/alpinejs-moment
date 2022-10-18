import plugin from "../../src/de-ch.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    