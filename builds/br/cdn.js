import plugin from "../../src/br.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    