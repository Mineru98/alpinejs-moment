import plugin from "../../src/be.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    