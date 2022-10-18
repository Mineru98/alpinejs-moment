import plugin from "../../src/jv.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    