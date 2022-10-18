import plugin from "../../src/hr.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    