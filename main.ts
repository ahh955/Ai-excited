// Skywhale — a colossal whale breaching through a sea of golden clouds
// above a sleeping night city, its splash bursting into constellations.
//
// Entry for make.fun's "Make the AI judge excited" bounty (ai-excited-01).
// The program writes exactly one image, entry.png, to the output directory:
// $MAKEFUN_OUTPUT_DIR when it is set, otherwise /output. The copy is a plain
// byte-for-byte copy, so every run produces identical output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');

// The output directory comes from the environment, with /output as the
// fallback. An empty string counts as unset, so a stray empty export cannot
// send the copy to a relative path by accident.
function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return fromEnv ? fromEnv : '/output';
}

const target = join(outputDir(), 'entry.png');
mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
