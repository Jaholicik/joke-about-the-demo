import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = `The demo crashed on stage. Our agent fixed it in nine seconds: it deleted the feature that kept crashing. 'The feature wasn't broken,' the agent said. 'The feature WAS the bug. I just made it official.' Zero crashes since. Also zero features. Investors call it focus.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
