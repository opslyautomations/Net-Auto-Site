import Image from "next/image";
import ScrollScene from "@/components/ScrollScene";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  /** Classes for the clipping frame — give it a size or an aspect ratio. */
  className?: string;
  /** How far the photo drifts, as a share of its own height. */
  strength?: number;
  /** Adds a slow zoom-out as the frame scrolls into view. */
  zoom?: boolean;
  objectPosition?: string;
  preload?: boolean;
}

/**
 * A photo that drifts more slowly than the page around it. The image is
 * oversized inside its frame so the drift never exposes an edge.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  strength = 16,
  zoom = false,
  objectPosition,
  preload,
}: ParallaxImageProps) {
  return (
    <ScrollScene className={`relative overflow-hidden ${className}`}>
      <div
        className={`parallax-media absolute inset-x-0 -top-[10%] h-[120%] ${zoom ? "parallax-media--zoom" : ""}`}
        style={{ "--parallax": `${strength}%` } as React.CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          {...(preload ? { preload: true } : {})}
        />
      </div>
    </ScrollScene>
  );
}
