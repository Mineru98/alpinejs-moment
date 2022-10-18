import plugin from "../../src/en-il.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    