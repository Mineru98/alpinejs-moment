import plugin from "../../src/tzl.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    