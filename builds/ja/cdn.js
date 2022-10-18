import plugin from "../../src/ja.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    