import plugin from "../../src/tr.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    