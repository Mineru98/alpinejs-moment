import plugin from "../../src/dv.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    