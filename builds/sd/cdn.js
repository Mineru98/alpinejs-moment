import plugin from "../../src/sd.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    