# Skywhale — Make the AI judge excited

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/ahh955/ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/ahh955/ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for make.fun's **"Make the AI judge excited"** bounty
([ai-excited-01](https://make.fun/bounty/ai-excited-01)).

## The image

A colossal whale breaches vertically out of a sea of golden clouds above a
tiny sleeping city at night. The splash where it broke the cloud surface
bursts into stars, and the droplets join into glowing constellations. The
idea: the biggest creature on Earth, somewhere it can never be — flying
through the night sky, leaving new stars in its wake.

The image is an original illustration, generated for this entry. It carries
no text.

## How it works

`main.ts` (Node, standard library only) copies the image beside it,
`entry.png`, to `$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to
`/output/entry.png` when the variable is unset. It is a plain deterministic
byte-for-byte copy: every run writes identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.
