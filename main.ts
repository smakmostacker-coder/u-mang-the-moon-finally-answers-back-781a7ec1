import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon Finally Answers Back — one line, 1 to 240 characters,
// in the voice of the Moon replying at last to the wishes, howls
// and late-night promises of everyone staring up at it.
const MAX_CHARS = 240;

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and not one of you ever asked how I'm doing. I'm a rock. I glow. I'm fine. Your ex isn't coming back.";

function main(): void {
  if (LINE.length === 0) {
    throw new Error("line must not be empty");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (LINE.trim() !== LINE) {
    throw new Error("line must not start or end with whitespace");
  }
  if (LINE.length > MAX_CHARS) {
    throw new Error(`line is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
