import { ImageResponse } from "next/og";

export const alt = "DOMI Solutions — sites, e-commerce e sistemas sob medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", color: "#FFFFFF", background: "linear-gradient(135deg, #070B1F 0%, #192B9D 65%, #FF6D4B 150%)", fontFamily: "Arial" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 31, fontWeight: 800 }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 15, background: "linear-gradient(135deg, #2F4BFF, #FF6D4B)" }}>D</span><span>DOMI Solutions</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 800, letterSpacing: -3 }}><span>Software sob medida</span><span>para o seu negócio.</span></div><div style={{ color: "#D6DCFF", fontSize: 28 }}>Sites · Lojas virtuais · Sistemas · Integrações</div></div>
    </div>,
    size,
  );
}
