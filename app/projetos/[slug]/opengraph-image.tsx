import { ImageResponse } from "next/og";
import { getProject } from "../data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  const name = project?.name ?? "DOMI Solutions";
  const category = project?.category ?? "Software sob medida";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", background: "#F8F8F5", color: "#111218", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 2 }}><span>DOMI SOLUTIONS</span><span>CASE STUDY</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}><div style={{ fontSize: 110, fontWeight: 800, letterSpacing: -6 }}>{name}</div><div style={{ maxWidth: 850, color: "#555752", fontSize: 38, lineHeight: 1.2 }}>{category}</div></div>
    </div>,
    size,
  );
}
