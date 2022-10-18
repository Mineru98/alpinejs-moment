import plugin from "../../src/th.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    