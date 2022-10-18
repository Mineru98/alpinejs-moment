import plugin from "../../src/is.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    