import plugin from "../../src/it.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    