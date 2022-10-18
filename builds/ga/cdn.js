import plugin from "../../src/ga.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    