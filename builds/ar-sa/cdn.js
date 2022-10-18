import plugin from "../../src/ar-sa.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    