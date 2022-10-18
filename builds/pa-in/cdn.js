import plugin from "../../src/pa-in.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    