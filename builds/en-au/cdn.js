import plugin from "../../src/en-au.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    