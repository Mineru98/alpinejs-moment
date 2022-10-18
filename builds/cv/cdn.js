import plugin from "../../src/cv.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    