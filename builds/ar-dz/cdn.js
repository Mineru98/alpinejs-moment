import plugin from "../../src/ar-dz.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    