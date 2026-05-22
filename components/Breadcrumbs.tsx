import Link from "next/link";

interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm" style={{ color: "#6B7A90" }}>
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" style={{ color: "#0A1F3D" }} className="font-medium">
                {crumb.name}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:underline transition-colors"
                style={{ color: "#6B7A90" }}
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
