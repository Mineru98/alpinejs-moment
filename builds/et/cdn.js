import plugin from "../../src/et.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    