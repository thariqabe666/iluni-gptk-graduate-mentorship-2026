import type { SVGProps } from "react";

/**
 * Brand geometric mark library — hard-edged solid shapes matching the
 * event's Canva poster artwork (references/*.png, assets-png/*.png).
 * All shapes fill with `currentColor` on a 0-100 viewBox so they can be
 * sized and colored via standard Tailwind text-color + size classes.
 */

function starPath(
  cx: number,
  cy: number,
  spikes: number,
  outerR: number,
  innerR: number
) {
  const step = Math.PI / spikes;
  let angle = -Math.PI / 2;
  let d = "";
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)} `;
    angle += step;
  }
  return d + "Z";
}

function circlePath(cx: number, cy: number, r: number) {
  return `M${cx + r},${cy} A${r},${r} 0 1,0 ${cx - r},${cy} A${r},${r} 0 1,0 ${
    cx + r
  },${cy} Z`;
}

const FOUR_POINT_STAR = starPath(50, 50, 4, 48, 12);
const GEAR_16 = `${starPath(50, 50, 16, 48, 38)} ${circlePath(50, 50, 18)}`;

/** Sharp 4-point diamond star / sparkle — matches assets-png/1.png. */
export function FourPointStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d={FOUR_POINT_STAR} />
    </svg>
  );
}

/** 8-spoke straight-bar burst/asterisk — matches assets-png/2.png. */
export function Burst(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x={43}
          y={4}
          width={14}
          height={92}
          rx={4}
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

/** 4-petal flower shape with a square center cutout — matches assets-png/3.png. */
export function FlowerSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" fillRule="evenodd" aria-hidden="true" {...props}>
      {/* 4 overlapping circular lobes */}
      <circle cx={50} cy={28} r={24} />
      <circle cx={50} cy={72} r={24} />
      <circle cx={28} cy={50} r={24} />
      <circle cx={72} cy={50} r={24} />
      <rect x={28} y={28} width={44} height={44} />
      {/* Centered punched square */}
      <rect x={35} y={35} width={30} height={30} fill="white" className="dark:fill-black" />
    </svg>
  );
}

/** 16-tooth sunburst cog with a punched center hole — matches assets-png/4.png. */
export function GearStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" fillRule="evenodd" aria-hidden="true" {...props}>
      <path d={GEAR_16} />
    </svg>
  );
}

/** Two overlapping 4-point diamond stars forming an "M" sparkle — matches assets-png/5.png. */
export function Quatrefoil(props: SVGProps<SVGSVGElement>) {
  const lobe = starPath(0, 50, 4, 46, 14);
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d={lobe} transform="translate(28,0)" />
      <path d={lobe} transform="translate(72,0)" />
    </svg>
  );
}

/** 4-blade curved pinwheel — matches assets-png/6.png. */
export function Pinwheel(props: SVGProps<SVGSVGElement>) {
  const blade = "M50,50 Q12,50 6,12 Q48,6 50,50 Z";
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      {[0, 90, 180, 270].map((deg) => (
        <path key={deg} d={blade} transform={`rotate(${deg} 50 50)`} />
      ))}
    </svg>
  );
}

/** Solid heart — matches assets-png/7.png. */
export function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M50,88 C20,65 4,45 4,28 C4,12 18,2 32,2 C40,2 47,7 50,15 C53,7 60,2 68,2 C82,2 96,12 96,28 C96,45 80,65 50,88 Z" />
    </svg>
  );
}

/** 3-arch fan blades / semi-circle curves (seen in Poster 1, 2, 4). */
export function FanArches(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12,10 A40,40 0 0,1 12,90 L12,10 Z" />
      <path d="M42,10 A40,40 0 0,1 42,90 L42,10 Z" />
      <path d="M72,10 A40,40 0 0,1 72,90 L72,10 Z" />
    </svg>
  );
}

/** Infinity loop (seen in Poster 1 "Limitless Opportunities"). */
export function InfinityMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M30 30 C 15 15, 5 15, 5 30 C 5 45, 15 45, 30 30 C 45 15, 55 15, 70 30 C 85 45, 95 45, 95 30 C 95 15, 85 15, 70 30 C 55 45, 45 45, 30 30 Z" />
    </svg>
  );
}

/** Right-pointing triangle arrow bullet (seen in Posters 1, 2, 3, 5). */
export function TriangleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22,12 L86,50 L22,88 Z" />
    </svg>
  );
}

/** Water droplet / flame shape for Oil & Gas Track (seen in Poster 5). */
export function DropletShape(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M50,8 C50,8 18,50 18,68 A32,32 0 0,0 82,68 C82,50 50,8 50,8 Z" />
    </svg>
  );
}

/** Official ILUNI house emblem badge with Makara UI sun and roof lines. */
export function IluniRoofLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 75" fill="none" className={className} aria-label="ILUNI GPTK FTUI Logo" {...props}>
      {/* Navy blue outer roof frame */}
      <path d="M10 40 L60 8 L110 40" stroke="#002B66" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Red inner roof outline and base pillars */}
      <path d="M22 45 L60 16 L98 45" stroke="#E61E2A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="45" x2="22" y2="60" stroke="#E61E2A" strokeWidth="5" strokeLinecap="round" />
      <line x1="98" y1="45" x2="98" y2="60" stroke="#E61E2A" strokeWidth="5" strokeLinecap="round" />
      {/* Yellow sunburst emblem center */}
      <circle cx="60" cy="36" r="11" fill="#F5B800" />
      <circle cx="60" cy="36" r="6" fill="#FFF" />
      <circle cx="60" cy="36" r="3" fill="#002B66" />
    </svg>
  );
}

/**
 * Neo-brutalist graphic collage block combining decorative shapes
 * in red, royal blue, and cream blocks (mirroring the bottom-right art block of Poster 4).
 */
export function ShapeCollage({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-2 rounded-2xl overflow-hidden p-3 bg-brand-blue ${className ?? ""}`}>
      {/* Top Left: White 4-petal flower on blue */}
      <div className="flex items-center justify-center bg-brand-blue p-2">
        <Pinwheel className="w-12 h-12 text-cream" />
      </div>
      {/* Top Right: Red Arch group on white */}
      <div className="flex items-center justify-center bg-cream rounded-xl p-2">
        <FanArches className="w-12 h-12 text-brand-red" />
      </div>
      {/* Bottom Left: Cream rounded block with diamond */}
      <div className="flex items-center justify-center bg-cream rounded-xl p-2">
        <FourPointStar className="w-10 h-10 text-brand-blue" />
      </div>
      {/* Bottom Right: Red twin sparkle on blue */}
      <div className="flex items-center justify-center bg-brand-blue p-2">
        <Quatrefoil className="w-12 h-12 text-brand-red" />
      </div>
    </div>
  );
}
