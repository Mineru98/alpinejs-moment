import plugin from "../../src/sl.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    