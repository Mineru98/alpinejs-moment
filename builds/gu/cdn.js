import plugin from "../../src/gu.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    