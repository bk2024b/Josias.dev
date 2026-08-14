import { ImageResponse } from "next/og";

export const alt = "Josias — Developer & Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(0,210,106,0.16), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 32,
            color: "#a1a1aa",
            letterSpacing: -0.5,
          }}
        >
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#00d26a" }} />
          Available for new opportunities
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 36,
            fontSize: 68,
            fontWeight: 600,
            color: "#fafafa",
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          <div style={{ display: "flex" }}>
            Hi, I&apos;m&nbsp;<span style={{ color: "#00d26a" }}>Josias</span>.
          </div>
          <div style={{ display: "flex" }}>I build products</div>
          <div style={{ display: "flex" }}>people enjoy using.</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          Full-stack developer · Next.js · Product Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
