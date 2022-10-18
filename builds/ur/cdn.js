import plugin from "../../src/ur.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    