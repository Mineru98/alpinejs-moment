import plugin from "../../src/tl-ph.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    