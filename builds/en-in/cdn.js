import plugin from "../../src/en-in.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    