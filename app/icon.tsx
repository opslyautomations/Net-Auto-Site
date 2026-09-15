import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Browser tab mark: a single gold "N" on the brand navy. */
export default async function Icon() {
  const font = await readFile(join(process.cwd(), "assets/Poppins-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1F3D",
          color: "#F08C2A",
          fontSize: 44,
          fontFamily: "Poppins",
        }}
      >
        N
      </div>
    ),
    { ...size, fonts: [{ name: "Poppins", data: font, style: "normal", weight: 600 }] },
  );
}
