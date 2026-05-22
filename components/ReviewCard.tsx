interface ReviewCardProps {
  reviewerName: string;
  location?: string;
  rating?: number;
  text: string;
  date?: string;
}

export default function ReviewCard({
  reviewerName,
  location,
  rating = 5,
  text,
  date,
}: ReviewCardProps) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 16px rgba(10,31,61,0.08)",
        border: "1px solid #B1D1E7",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="font-bold text-base" style={{ color: "#0A1F3D" }}>
            {reviewerName}
          </div>
          {location && (
            <div className="text-xs mt-0.5" style={{ color: "#6B7A90" }}>
              {location}
            </div>
          )}
        </div>
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-lg" style={{ color: "#F08C2A" }} aria-hidden="true">
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#0A1F3D" }}>
        "{text}"
      </p>
      {date && (
        <div className="text-xs" style={{ color: "#6B7A90" }}>
          {date}
        </div>
      )}
    </div>
  );
}
