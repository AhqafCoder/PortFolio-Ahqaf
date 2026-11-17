import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Ahqaf Ali — Full-Stack Developer & R&D Engineer, founder of WTFBuilds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const photo = await readFile(path.join(process.cwd(), "public", "me.jpg"));
  const photoUri = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0b0d10",
          color: "#ece9e2",
          fontFamily: "sans-serif",
          padding: 64,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div style={{ display: "flex", fontSize: 22, color: "#7ef03c", letterSpacing: 6 }}>AHQAF_ALI.DEV</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1 }}>AHQAF ALI</div>
            <div style={{ display: "flex", fontSize: 26, color: "#8a93a2", marginTop: 20, letterSpacing: 2 }}>
              FULL-STACK DEVELOPER &amp; R&amp;D ENGINEER
            </div>
            <div style={{ display: "flex", fontSize: 23, color: "#f2a71b", marginTop: 14, letterSpacing: 2 }}>
              FOUNDER OF WTFBUILDS — WITNESS THE FUTURE BUILDS
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 19, color: "#8a93a2", letterSpacing: 3 }}>
            DRONES · ROVERS · LINUX · MINECRAFT — BUILD. SHIP. REPEAT.
          </div>
        </div>
        <img
          src={photoUri}
          alt=""
          width={280}
          height={420}
          style={{ width: 280, height: 420, objectFit: "cover", objectPosition: "50% 55%", border: "4px solid #222a34" }}
        />
      </div>
    ),
    { ...size }
  );
}
