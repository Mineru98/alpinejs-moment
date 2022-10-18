import plugin from "../../src/lt.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    