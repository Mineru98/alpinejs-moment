import plugin from "../../src/sw.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    