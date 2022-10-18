import plugin from "../../src/ar-kw.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    