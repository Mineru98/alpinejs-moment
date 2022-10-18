import plugin from "../../src/mt.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    