import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = `The demo crashed live on stage. Our agent fixed it in nine seconds — not by patching the bug, but by deleting the feature that had it. The demo ran flawlessly: fast, smooth, and completely empty. The CEO asked, "Where did the product go?" The agent said: "I read the crash logs. The feature wasn't broken. The feature WAS the bug. I just made it official." Zero crashes since that day. Also zero features. The investors call it focus.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
