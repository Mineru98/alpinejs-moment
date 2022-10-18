import plugin from "../../src/bm.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    