import plugin from "../../src/oc-lnc.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    