import plugin from "../../src/ca.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    