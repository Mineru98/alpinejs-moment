import plugin from "../../src/sk.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    