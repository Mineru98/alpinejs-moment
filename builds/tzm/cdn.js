import plugin from "../../src/tzm.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    