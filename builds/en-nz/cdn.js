import plugin from "../../src/en-nz.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    