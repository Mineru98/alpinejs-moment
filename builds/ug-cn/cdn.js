import plugin from "../../src/ug-cn.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    