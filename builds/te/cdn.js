import plugin from "../../src/te.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    