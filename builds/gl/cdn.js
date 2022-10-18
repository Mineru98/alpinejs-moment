import plugin from "../../src/gl.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    