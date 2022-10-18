import plugin from "../../src/af.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    