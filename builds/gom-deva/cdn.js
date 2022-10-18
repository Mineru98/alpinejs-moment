import plugin from "../../src/gom-deva.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    