import plugin from "../../src/sv.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    