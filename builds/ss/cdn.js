import plugin from "../../src/ss.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    