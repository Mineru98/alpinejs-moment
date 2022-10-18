import plugin from "../../src/zh-tw.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    