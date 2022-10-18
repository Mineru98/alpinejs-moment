import plugin from "../../src/nn.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    