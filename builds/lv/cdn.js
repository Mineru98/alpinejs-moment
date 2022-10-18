import plugin from "../../src/lv.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    