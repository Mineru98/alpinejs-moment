import plugin from "../../src/pt-br.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    