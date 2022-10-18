import plugin from "../../src/mi.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    