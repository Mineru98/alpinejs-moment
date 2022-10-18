import plugin from "../../src/cs.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    