import plugin from "../../src/bn-bd.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    