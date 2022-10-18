import plugin from "../../src/zh-hk.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    