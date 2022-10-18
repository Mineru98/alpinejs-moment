import plugin from "../../src/ka.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    