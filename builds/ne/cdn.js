import plugin from "../../src/ne.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    