import plugin from "../../src/tk.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    