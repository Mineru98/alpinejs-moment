import plugin from "../../src/bs.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    