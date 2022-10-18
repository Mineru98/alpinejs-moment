const fs = require("fs");
const locales = [
    "af",
    "ar",
    "ar-dz",
    "ar-kw",
    "ar-ly",
    "ar-ma",
    "ar-sa",
    "ar-tn",
    "az",
    "be",
    "bg",
    "bm",
    "bn",
    "bn-bd",
    "bo",
    "br",
    "bs",
    "ca",
    "cs",
    "cv",
    "cy",
    "da",
    "de",
    "de-at",
    "de-ch",
    "dv",
    "el",
    "en-au",
    "en-ca",
    "en-gb",
    "en-ie",
    "en-il",
    "en-in",
    "en-nz",
    "en-sg",
    "eo",
    "es",
    "es-do",
    "es-mx",
    "es-us",
    "et",
    "eu",
    "fa",
    "fi",
    "fil",
    "fo",
    "fr",
    "fr-ca",
    "fr-ch",
    "fy",
    "ga",
    "gd",
    "gl",
    "gom-deva",
    "gom-latn",
    "gu",
    "he",
    "hi",
    "hr",
    "hu",
    "hy-am",
    "id",
    "is",
    "it",
    "it-ch",
    "ja",
    "jv",
    "ka",
    "kk",
    "km",
    "kn",
    "ko",
    "ku",
    "ky",
    "lb",
    "lo",
    "lt",
    "lv",
    "me",
    "mi",
    "mk",
    "ml",
    "mn",
    "mr",
    "ms",
    "ms-my",
    "mt",
    "my",
    "nb",
    "ne",
    "nl",
    "nl-be",
    "nn",
    "oc-lnc",
    "pa-in",
    "pl",
    "pt",
    "pt-br",
    "ro",
    "ru",
    "sd",
    "se",
    "si",
    "sk",
    "sl",
    "sq",
    "sr",
    "sr-cyrl",
    "ss",
    "sv",
    "sw",
    "ta",
    "te",
    "tet",
    "tg",
    "th",
    "tk",
    "tl-ph",
    "tlh",
    "tr",
    "tzl",
    "tzm",
    "tzm-latn",
    "ug-cn",
    "uk",
    "ur",
    "uz",
    "uz-latn",
    "vi",
    "x-pseudo",
    "yo",
    "zh-cn",
    "zh-hk",
    "zh-mo",
    "zh-tw",
];
const makeFolder = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

for (let i = 0; i < locales.length; i++) {
    const input = `import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("${locales[i]}");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    `;

    fs.writeFile(`src/${locales[i]}.js`, input, () => {});
}

for (let i = 0; i < locales.length; i++) {
    makeFolder(`./builds/${locales[i]}`);
    const cdn_input = `import plugin from "../../src/${locales[i]}.js";

    document.addEventListener("alpine:init", () => {
        window.Alpine.plugin(plugin);
    });
    `;

    fs.writeFile(`./builds/${locales[i]}/cdn.js`, cdn_input, () => {});

    const module_input = `import plugin from "../../src/${locales[i]}.js";

    export default plugin;
    `;

    fs.writeFile(`./builds/${locales[i]}/module.js`, module_input, () => {});
}

let build_input = `//CDN
build({
    entryPoints: ["builds/cdn.js"],
    outfile: "dist/plugin.min.js",
    bundle: true,
    minify: true,
    sourcemap: false,
    platform: "browser",
    define: { CDN: true },
});
`;

for (let i = 0; i < locales.length; i++) {
    build_input += `build({
    entryPoints: ["builds/${locales[i]}/cdn.js"],
    outfile: "dist/${locales[i]}/plugin.min.js",
    bundle: true,
    minify: true,
    sourcemap: false,
    platform: "browser",
    define: { CDN: true },
});
`;
}

build_input += `//Module
build({
    entryPoints: ["builds/module.js"],
    outfile: "dist/plugin.esm.js",
    bundle: true,
    bundle: true,
    platform: "neutral",
    mainFields: ["main", "module"],
});
build({
    entryPoints: ["builds/module.js"],
    outfile: "dist/plugin.cjs.js",
    bundle: true,
    target: ["node10.4"],
    platform: "node",
});
`;

for (let i = 0; i < locales.length; i++) {
    build_input += `build({
    entryPoints: ["builds/${locales[i]}/module.js"],
    outfile: "dist/${locales[i]}/plugin.esm.js",
    bundle: true,
    bundle: true,
    platform: "neutral",
    mainFields: ["main", "module"],
});
build({
    entryPoints: ["builds/${locales[i]}/module.js"],
    outfile: "dist/${locales[i]}/plugin.cjs.js",
    bundle: true,
    target: ["node10.4"],
    platform: "node",
});
`;
}

build_input += `
function build(options) {
    options.define || (options.define = {});
    options.define["process.env.NODE_ENV"] = process.argv.includes("--watch")
        ? \`"production"\`
        : \`"development"\`;

    return require("esbuild")
        .build({
            watch: process.argv.includes("--watch"),
            // external: ["alpinejs"],
            ...options,
        })
        .catch(() => process.exit(1));
}
`;

fs.writeFile(`scripts/build.js`, build_input, () => {});
