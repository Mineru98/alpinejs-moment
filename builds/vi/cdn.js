import plugin from "../../src/vi.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    