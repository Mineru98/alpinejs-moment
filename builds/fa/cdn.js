import plugin from "../../src/fa.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    