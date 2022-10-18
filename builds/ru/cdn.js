import plugin from "../../src/ru.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    