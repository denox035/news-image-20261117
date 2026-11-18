import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// News image entry for make.fun bounty news-image-20261117.
// The image is bundled in this repo; the program just copies it to
// /output/entry.png. No network, no randomness: two runs write the
// same bytes. The bundled image is 1024x1024 PNG, well under the
// competition's 1 MiB limit.

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = join("/output", "entry.png");

mkdirSync("/output", { recursive: true });
copyFileSync(source, target);
