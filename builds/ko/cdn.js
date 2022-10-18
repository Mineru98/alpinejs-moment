import plugin from "../../src/ko.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    