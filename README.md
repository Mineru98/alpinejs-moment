# Alpine.js plugin Moment With Locale

An Alpine JS **Moment Plugin** lets you programmatically monitor changes to the size of the screen

## Instalation

### Via script include

```html
<!-- You can choose the Locale. -->

<!-- Alpine Plugins -->
<script src="/js/moment.min.js" defer></script>
<!-- Alpine Plugins with Locale -->
<script src="/js/ko/moment.min.js" defer></script>
<!-- Alpine Plugins with Locale -->
<script src="/js/jp/moment.min.js" defer></script>

<script src="/js/alpine.js" defer></script>
```

### Via CDN

```html
<!-- You can choose the Locale. -->

<!-- Alpine Plugins -->
<script
    src="https://unpkg.com/@mineru98/alpinejs-moment@1.0.3/dist/moment.min.js"
    defer
></script>
<!-- Alpine Plugins with Locale -->
<script
    src="https://unpkg.com/@mineru98/alpinejs-moment@1.0.3/dist/ko/moment.min.js"
    defer
></script>
<!-- Alpine Plugins with Locale -->
<script
    src="https://unpkg.com/@mineru98/alpinejs-moment@1.0.3/dist/jp/moment.min.js"
    defer
></script>

<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM

```bash
npm i @mineru98/alpinejs-moment
```

```javascript
import Alpine from "alpinejs";

import moment from "@mineru98/alpinejs-moment/ko";
Alpine.plugin(moment);

window.Alpine = Alpine;
window.Alpine.start();
```

# $moment()

Magic Helper

```html
<div x-data x-text="$moment().format('YYYY-MM-DD dddd')"></div>
```
