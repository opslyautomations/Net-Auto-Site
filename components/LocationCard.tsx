import Link from "next/link";

interface LocationCardProps {
  slug: string;
  name: string;
  style?: "pill" | "card";
}

export default function LocationCard({ slug, name, style = "pill" }: LocationCardProps) {
  if (style === "card") {
    return (
      <Link
        href={`/service-areas/${slug}`}
        className="location-card-link block p-4 rounded-xl border text-center font-semibold text-sm transition-all hover:shadow-md hover:-translate-y-0.5"
        style={{ borderColor: "#B1D1E7", backgroundColor: "#ffffff", color: "#0A1F3D" }}
      >
        {name}
        <span className="block text-xs mt-1 font-normal" style={{ color: "#6B7A90" }}>
          Oahu, Hawaii
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/service-areas/${slug}`}
      className="location-pill-link inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
      style={{
        backgroundColor: "#0A1F3D",
        color: "#ffffff",
        borderColor: "#B1D1E7",
      }}
    >
      {name}
    </Link>
  );
}
