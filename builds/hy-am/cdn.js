import plugin from "../../src/hy-am.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    