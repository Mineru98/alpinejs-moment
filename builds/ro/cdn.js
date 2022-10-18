import plugin from "../../src/ro.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    