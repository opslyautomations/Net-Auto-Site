interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{
            backgroundColor: light ? "rgba(240,140,42,0.15)" : "rgba(240,140,42,0.1)",
            color: "#F08C2A",
          }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        style={{ color: light ? "#ffffff" : "#0A1F3D" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{
            color: light ? "rgba(255,255,255,0.8)" : "#6B7A90",
            margin: centered ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
