import plugin from "../../src/ta.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    