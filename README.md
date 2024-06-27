# highlightjs-jsonata
JSONata language grammar for Highlight.js

## About JSONata
JSONata is a lightweight query and transformation language for JSON data. To learn more, visit [jsonata.org](https://jsonata.org/)

## Usage
Include the highlight.js library in your webpage or Node app, then load this module.

### Static website

1. Load the module after loading Highlight.js
2. Use the minified version found in the dist directory.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-jsonata/dist/jsonata.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Node.js

```javascript
var hljs = require('highlightjs');
var hljsJsonata = require('highlightjs-jsonata');

hljs.registerLanguage("jsonata", hljsJsonata);
hljs.highlightAll();
```

Once loaded, mark the code you want to highlight with the class.

#### HTML

```html
<pre><code class="language-jsonata">...</code></pre>
```

#### Markdown

```jsonata
```jsonata
$a := 1 + 2
... 
```

### Next.js

```typescript
import fs from "fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { common } from "lowlight";
import jsonata from "highlight.js/lib/languages/jsonata"

const file = fs.readFileSync("./full/path/to/file.md", "utf8");

const mdToHtml = await unified()
  .use(remarkParse, { fragment: true })
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeHighlight, { languages: {...common, jsonata} })
  .use(rehypeStringify)
  .process(matter(file).content);
```

## License
highlightjs-jsonata is released under the CC0 1.0 License. See LICENSE file for details.

## Author
Vlad Dimov [devdimov@proton.me](mailto:devdimov@proton.me)

## Links
The official site for the Highlight.js library is [https://highlightjs.org](https://highlightjs.org).
The Highlight.js GitHub project: [https://github.com/highlightjs/highlight.js](https://github.com/highlightjs/highlight.js)
