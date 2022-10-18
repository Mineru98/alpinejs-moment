import plugin from "../../src/sq.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    