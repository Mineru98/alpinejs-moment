import plugin from "../../src/tzm-latn.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    