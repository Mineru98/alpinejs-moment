import plugin from "../../src/fi.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    