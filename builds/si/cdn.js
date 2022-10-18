import plugin from "../../src/si.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    