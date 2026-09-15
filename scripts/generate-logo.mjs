/**
 * Regenerates public/images/logo.png — the wordmark the Organization JSON-LD
 * in lib/schema.ts points at.
 *
 * Structured data needs a stable, un-hashed URL, so this writes a real file
 * rather than using Next's generated icon routes. Run from the project root:
 *
 *   node scripts/generate-logo.mjs
 *
 * next/og isn't resolvable outside the Next build, so we load its compiled
 * Node build directly.
 */
import { createRequire } from "node:module";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const require = createRequire(`${root}/`);
const { ImageResponse } = require("next/dist/compiled/@vercel/og/index.node.js");

const NAVY = "#0A1F3D";
const GOLD = "#F08C2A";

const font = await readFile(join(root, "assets/Poppins-SemiBold.ttf"));

const h = (type, props) => ({ type, props });

const res = new ImageResponse(
  h("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `linear-gradient(135deg, ${NAVY} 0%, #12325f 100%)`,
      fontFamily: "Poppins",
    },
    children: [
      h("div", {
        style: { display: "flex", alignItems: "baseline", fontSize: 78 },
        children: [
          h("span", { style: { color: GOLD }, children: "NET" }),
          h("span", { style: { color: "#FFFFFF", marginLeft: 20 }, children: "AUTOMOTIVE" }),
        ],
      }),
      h("div", {
        style: { display: "flex", color: "#FFFFFF", fontSize: 40, letterSpacing: 14, marginTop: 6 },
        children: "DETAILING",
      }),
    ],
  }),
  {
    width: 800,
    height: 280,
    fonts: [{ name: "Poppins", data: font, style: "normal", weight: 600 }],
  },
);

const buf = Buffer.from(await res.arrayBuffer());
await mkdir(join(root, "public/images"), { recursive: true });
await writeFile(join(root, "public/images/logo.png"), buf);
console.log(`wrote public/images/logo.png (${buf.length} bytes)`);
