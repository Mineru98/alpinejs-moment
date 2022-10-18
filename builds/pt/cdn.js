import plugin from "../../src/pt.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    