import plugin from "../../src/nb.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    