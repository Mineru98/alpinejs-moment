import plugin from "../../src/fil.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    