import plugin from "../../src/nl-be.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    