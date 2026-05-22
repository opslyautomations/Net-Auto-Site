import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  compact?: boolean;
}

export default function ServiceCard({
  slug,
  name,
  description,
  icon = "✨",
  compact = false,
}: ServiceCardProps) {
  if (compact) {
    return (
      <Link
        href={`/services/${slug}`}
        className="flex items-center gap-3 p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5"
        style={{ borderColor: "#B1D1E7", backgroundColor: "#ffffff" }}
      >
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <span className="font-semibold text-sm" style={{ color: "#0A1F3D" }}>{name}</span>
      </Link>
    );
  }

  return (
    <div
      className="rounded-2xl border p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1"
      style={{
        borderColor: "#B1D1E7",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 12px rgba(10,31,61,0.06)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: "rgba(240,140,42,0.1)" }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2" style={{ color: "#0A1F3D" }}>
          {name}
        </h3>
        {description && (
          <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>
            {description}
          </p>
        )}
      </div>
      <Link
        href={`/services/${slug}`}
        className="mt-auto inline-flex items-center gap-1 font-semibold text-sm transition-colors hover:gap-2"
        style={{ color: "#F08C2A" }}
        aria-label={`Learn more about ${name}`}
      >
        Learn More →
      </Link>
    </div>
  );
}
