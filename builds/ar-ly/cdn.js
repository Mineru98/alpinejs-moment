import plugin from "../../src/ar-ly.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    