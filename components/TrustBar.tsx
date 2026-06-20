import { Reveal } from "@/components/Reveal";

const items = [
  { icon: "⭐", label: "60+ Five-Star Reviews" },
  { icon: "🚐", label: "Mobile Service" },
  { icon: "📅", label: "Same-Week Availability" },
  { icon: "✅", label: "Satisfaction Guaranteed" },
];

export default function TrustBar() {
  return (
    <div style={{ backgroundColor: "#0A1F3D" }}>
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} variant="fade" delay={i * 80}>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
