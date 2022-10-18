import plugin from "../../src/kk.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    