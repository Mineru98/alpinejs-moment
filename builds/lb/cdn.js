import plugin from "../../src/lb.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    