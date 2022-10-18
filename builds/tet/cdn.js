import plugin from "../../src/tet.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    