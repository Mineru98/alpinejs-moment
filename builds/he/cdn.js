import plugin from "../../src/he.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    