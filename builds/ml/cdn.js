import plugin from "../../src/ml.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    