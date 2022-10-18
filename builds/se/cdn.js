import plugin from "../../src/se.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    