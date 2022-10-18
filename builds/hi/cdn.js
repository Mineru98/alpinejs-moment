import plugin from "../../src/hi.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    