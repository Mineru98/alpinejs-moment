import plugin from "../../src/ms.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    