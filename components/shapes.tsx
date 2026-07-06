import type { SVGProps } from "react";

/**
 * Brand geometric mark library — hard-edged solid shapes matching the
 * event's Canva poster artwork (references/*.png, assets-png/*.png).
 * All shapes fill with `currentColor` on a 0-100 viewBox so they can be
 * sized/colored via standard Tailwind text-color + size classes.
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

const FOUR_POINT_STAR = starPath(50, 50, 4, 48, 14);
const GEAR = `${starPath(50, 50, 10, 46, 34)} ${circlePath(50, 50, 18)}`;

/** Sharp 4-point star / sparkle — matches assets-png/1.png. */
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
          x={44}
          y={4}
          width={12}
          height={92}
          rx={3}
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

/** Two overlapping 4-point stars forming an "M" sparkle mark — matches assets-png/5.png. */
export function Quatrefoil(props: SVGProps<SVGSVGElement>) {
  const lobe = starPath(0, 50, 4, 46, 14);
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>
      <path d={lobe} transform="translate(27,0)" />
      <path d={lobe} transform="translate(73,0)" />
    </svg>
  );
}

/** 10-tooth cog with a punched center hole — matches assets-png/4.png. */
export function GearStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" fillRule="evenodd" aria-hidden="true" {...props}>
      <path d={GEAR} />
    </svg>
  );
}

/** 4-blade curved pinwheel — matches assets-png/6.png. */
export function Pinwheel(props: SVGProps<SVGSVGElement>) {
  const blade = "M50,50 Q10,50 4,10 Q46,4 50,50 Z";
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
