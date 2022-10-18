import plugin from "../../src/ky.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    