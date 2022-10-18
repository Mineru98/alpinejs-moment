import plugin from "../../src/ku.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    