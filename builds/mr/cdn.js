import plugin from "../../src/mr.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    