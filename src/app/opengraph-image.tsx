import { ImageResponse } from "next/og";

import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/* =========================================================
   LOAD FONTS
========================================================= */

const getFontData = async () => {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      fetch(
        new URL(
          "../../public/fonts/CabinetGrotesk-Medium.ttf",
          import.meta.url
        )
      ).then((res) => res.arrayBuffer()),

      fetch(
        new URL(
          "../../public/fonts/ClashDisplay-Semibold.ttf",
          import.meta.url
        )
      ).then((res) => res.arrayBuffer()),
    ]);

    return {
      cabinetGrotesk,
      clashDisplay,
    };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
};

/* =========================================================
   OPENGRAPH IMAGE
========================================================= */

export default async function Image() {
  try {
    const fontData = await getFontData();

    const imageUrl = DATA.avatarUrl
      ? new URL(DATA.avatarUrl, DATA.url).toString()
      : undefined;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",

            display: "flex",
            position: "relative",

            background:
              "linear-gradient(to bottom right, #0f172a, #111827, #020617)",

            overflow: "hidden",

            fontFamily: "Cabinet Grotesk",
          }}
        >
          {/* =========================================================
              BACKGROUND GLOW
          ========================================================= */}

          <div
            style={{
              position: "absolute",
              top: "-150px",
              right: "-150px",

              width: "500px",
              height: "500px",

              borderRadius: "9999px",

              background: "rgba(59,130,246,0.18)",

              filter: "blur(120px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-150px",
              left: "-150px",

              width: "500px",
              height: "500px",

              borderRadius: "9999px",

              background: "rgba(14,165,233,0.18)",

              filter: "blur(120px)",
            }}
          />

          {/* =========================================================
              GRID EFFECT
          ========================================================= */}

          <div
            style={{
              position: "absolute",
              inset: 0,

              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",

              backgroundSize: "40px 40px",
            }}
          />

          {/* =========================================================
              CONTENT
          ========================================================= */}

          <div
            style={{
              position: "relative",

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              width: "100%",
              height: "100%",

              padding: "70px",
            }}
          >
            {/* TOP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={DATA.name}
                  width={120}
                  height={120}
                  style={{
                    borderRadius: "32px",
                    objectFit: "cover",

                    border: "4px solid rgba(255,255,255,0.08)",
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    color: "#94a3b8",

                    marginBottom: "8px",
                  }}
                >
                  Full Stack Developer
                </span>

                <span
                  style={{
                    fontSize: "32px",
                    color: "#ffffff",

                    fontWeight: 600,
                    fontFamily: "Clash Display",
                  }}
                >
                  {DATA.name}
                </span>
              </div>
            </div>

            {/* CENTER */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "72px",
                  lineHeight: "1",

                  fontWeight: 600,

                  letterSpacing: "-0.04em",

                  color: "#ffffff",

                  maxWidth: "950px",

                  fontFamily: "Clash Display",
                }}
              >
                Building Modern Web Experiences
              </div>

              <div
                style={{
                  marginTop: "28px",

                  fontSize: "28px",
                  lineHeight: "1.5",

                  color: "#cbd5e1",

                  maxWidth: "820px",
                }}
              >
                {DATA.description}
              </div>
            </div>

            {/* BOTTOM */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                }}
              >
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Docker",
                ].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      padding: "10px 18px",

                      borderRadius: "9999px",

                      background: "rgba(255,255,255,0.06)",

                      border: "1px solid rgba(255,255,255,0.08)",

                      color: "#ffffff",

                      fontSize: "18px",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: "20px",
                  color: "#94a3b8",
                }}
              >
                {DATA.url.replace("https://", "")}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,

        fonts: fontData
          ? [
              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                style: "normal",
                weight: 400,
              },

              {
                name: "Cabinet Grotesk",
                data: fontData.cabinetGrotesk,
                style: "normal",
                weight: 700,
              },

              {
                name: "Clash Display",
                data: fontData.clashDisplay,
                style: "normal",
                weight: 600,
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);

    return new Response(
      `Failed to generate image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}