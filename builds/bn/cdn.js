import plugin from "../../src/bn.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    