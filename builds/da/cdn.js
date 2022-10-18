import plugin from "../../src/da.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    