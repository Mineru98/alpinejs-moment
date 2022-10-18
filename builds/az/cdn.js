import plugin from "../../src/az.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    