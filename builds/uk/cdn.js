import plugin from "../../src/uk.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    