import plugin from "../../src/uz.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    