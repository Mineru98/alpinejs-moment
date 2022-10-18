import plugin from "../../src/el.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    