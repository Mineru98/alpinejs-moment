import plugin from "../../src/sr.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    