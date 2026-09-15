import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { PHONE, SITE_NAME } from "./constants";

/**
 * Shared renderer for every Open Graph card on the site.
 *
 * Each route segment has an `opengraph-image.tsx` that calls this, so all 61
 * cards (static pages, 10 services, 19 service areas, 23 blog posts) share one
 * layout and stay on-brand without committing 61 PNGs to the repo. Next
 * prerenders them at build time.
 *
 * Note: ImageResponse renders via Satori, which supports flexbox only — no
 * grid — and requires an explicit `display: flex` on any element with more
 * than one child.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const NAVY = "#0A1F3D";
const GOLD = "#F08C2A";
const LIGHT_BLUE = "#B1D1E7";

let fontPromise: Promise<Buffer> | null = null;

/** Read the font once per process rather than per image. */
function loadFont(): Promise<Buffer> {
  fontPromise ??= readFile(join(process.cwd(), "assets/Poppins-SemiBold.ttf"));
  return fontPromise;
}

/**
 * Longest real strings on the site are a 71-char title and a 164-char excerpt.
 * Left unchecked those crowd the wordmark and collide with the footer, so the
 * title steps down through three sizes and the subtitle is clipped on a word
 * boundary rather than allowed to run.
 */
function fitTitleSize(title: string) {
  if (title.length > 70) return 54;
  if (title.length > 58) return 62;
  return 74;
}

function clampSubtitle(subtitle: string, max = 118) {
  if (subtitle.length <= max) return subtitle;
  const cut = subtitle.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[,;:—-]$/, "")}…`;
}

interface OgCardOptions {
  /** Small gold label above the title, e.g. "Service Area". */
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export async function renderOgCard({ eyebrow, title, subtitle }: OgCardOptions) {
  const font = await loadFont();
  const trimmedSubtitle = subtitle ? clampSubtitle(subtitle) : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: NAVY,
          backgroundImage: `linear-gradient(135deg, ${NAVY} 0%, #12325f 100%)`,
          fontFamily: "Poppins",
        }}
      >
        {/* Accent wash, mirroring the hero treatment on the site */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 700,
            height: 700,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(240,140,42,0.22) 0%, rgba(240,140,42,0) 66%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(177,209,231,0.16) 0%, rgba(177,209,231,0) 66%)",
          }}
        />

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, letterSpacing: 1 }}>
          <span style={{ color: GOLD }}>NET</span>
          <span style={{ color: "#FFFFFF", marginLeft: 12 }}>AUTOMOTIVE DETAILING</span>
        </div>

        {/* Message */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              display: "flex",
              color: GOLD,
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: fitTitleSize(title),
              lineHeight: 1.12,
            }}
          >
            {title}
          </div>
          {trimmedSubtitle ? (
            <div
              style={{
                display: "flex",
                color: LIGHT_BLUE,
                fontSize: 28,
                lineHeight: 1.35,
                marginTop: 22,
              }}
            >
              {trimmedSubtitle}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>{PHONE}</span>
          <span style={{ color: LIGHT_BLUE }}>All of Oahu, Hawaii</span>
        </div>

        {/* Bottom accent rule */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 10,
            backgroundColor: GOLD,
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Poppins", data: font, style: "normal", weight: 600 }],
    },
  );
}

/** Default alt text builder so every card announces itself consistently. */
export const ogAlt = (title: string) => `${title} — ${SITE_NAME}`;
