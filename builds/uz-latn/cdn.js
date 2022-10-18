import plugin from "../../src/uz-latn.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    