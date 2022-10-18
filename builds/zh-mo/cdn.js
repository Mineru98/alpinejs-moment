import plugin from "../../src/zh-mo.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    