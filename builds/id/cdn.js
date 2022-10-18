import plugin from "../../src/id.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    