import plugin from "../../src/en-ca.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    