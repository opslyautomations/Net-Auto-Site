import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon. Apple masks the corners itself, so this stays square. */
export default async function AppleIcon() {
  const font = await readFile(join(process.cwd(), "assets/Poppins-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #0A1F3D 0%, #12325f 100%)",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", color: "#F08C2A", fontSize: 92, lineHeight: 1 }}>N</div>
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: 14,
            letterSpacing: 3,
            marginTop: 8,
          }}
        >
          DETAILING
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Poppins", data: font, style: "normal", weight: 600 }] },
  );
}
