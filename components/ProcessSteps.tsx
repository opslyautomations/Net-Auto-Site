import ScrollScene from "@/components/ScrollScene";
import ParallaxImage from "@/components/ParallaxImage";
import SectionHeader from "@/components/SectionHeader";
import Magnetic from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { PHONE } from "@/lib/constants";
import { media } from "@/lib/media";

const steps = [
  {
    title: "Request your free quote",
    body: `Fill out the quick form or call ${PHONE}. Tell us about your vehicle, what it needs, and where it's parked.`,
  },
  {
    title: "We come to you",
    body: "Pick a day that works. We arrive at your driveway, office, or condo stall with professional-grade tools and products.",
  },
  {
    title: "Enjoy the shine",
    body: "Get back a spotless, protected vehicle without losing your day to a shop drop-off. Satisfaction guaranteed.",
  },
];

/**
 * "How it works" — a layered photo collage on one side, and on the other a
 * three-step timeline whose connecting line draws itself as you scroll.
 */
export default function ProcessSteps() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: "#ffffff" }} aria-label="How mobile detailing works">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Collage */}
        <ScrollScene className="collage relative h-[380px] sm:h-[460px] lg:h-[560px] order-2 lg:order-1">
          <div className="collage__back absolute left-0 top-0 w-[72%] h-[78%] rounded-3xl overflow-hidden shadow-2xl">
            <ParallaxImage
              src={media.spongeWash.src}
              alt={media.spongeWash.alt}
              sizes="(max-width: 1024px) 70vw, 36vw"
              className="w-full h-full"
              zoom
            />
          </div>
          <div
            className="collage__front absolute right-0 bottom-0 w-[52%] h-[58%] rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "6px solid #ffffff" }}
          >
            <ParallaxImage
              src={media.steeringWipe.src}
              alt={media.steeringWipe.alt}
              sizes="(max-width: 1024px) 50vw, 26vw"
              className="w-full h-full"
              strength={22}
            />
          </div>
          <div
            className="collage__badge absolute left-4 bottom-6 sm:left-8 rounded-2xl px-5 py-4 shadow-xl"
            style={{ backgroundColor: "#0A1F3D" }}
          >
            <div className="text-2xl font-black leading-none" style={{ color: "#F08C2A", fontFamily: "var(--font-poppins), sans-serif" }}>
              3 steps
            </div>
            <div className="text-xs mt-1 text-white/80">Zero trips to a shop</div>
          </div>
        </ScrollScene>

        {/* Steps */}
        <div className="order-1 lg:order-2">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="How It Works"
              title="Showroom Results in Three Easy Steps"
              subtitle="Booking a detail should be as easy as the result looks."
              centered={false}
            />
          </Reveal>

          <ScrollScene as="ol" mode="enter" rest={1} className="steps relative flex flex-col gap-8 pl-14">
            <span className="steps__rail absolute left-[19px] top-2 bottom-2 w-0.5 rounded" style={{ backgroundColor: "#E3ECF4" }} aria-hidden="true">
              <span className="steps__fill absolute inset-0 rounded" style={{ backgroundColor: "#F08C2A" }} />
            </span>
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" variant="left" delay={i * 110} className="relative">
                <span
                  className="absolute -left-14 top-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-white shadow-lg"
                  style={{ backgroundColor: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold mb-1.5" style={{ color: "#0A1F3D" }}>{step.title}</h3>
                <p className="leading-relaxed" style={{ color: "#6B7A90" }}>{step.body}</p>
              </Reveal>
            ))}
          </ScrollScene>

          <Reveal as="div" variant="up" delay={200} className="mt-10 pl-14">
            <Magnetic className="inline-block">
              <a
                href="#quote-form"
                className="btn-shine btn-press inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base min-h-[48px]"
                style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
              >
                Start Step One <span className="arrow-nudge" aria-hidden="true">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
