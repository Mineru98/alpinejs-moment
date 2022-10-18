import plugin from "../../src/cy.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    