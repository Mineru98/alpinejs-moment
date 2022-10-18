import plugin from "../../src/en-ie.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    