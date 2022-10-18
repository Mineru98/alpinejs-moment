import plugin from "../../src/de.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    