import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  size?: number;
}

export function Logo({ className, iconClassName, size = 36 }: LogoProps) {
  return (
    <div
      className={cn(
        "rounded-full border-2 flex items-center justify-center flex-shrink-0",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Solid cursor/arrowhead mark — same path as the booklet's logo mark. */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={iconClassName}
        style={{ width: size * 0.44, height: size * 0.44 }}
      >
        <path d="M3 11L20 4L13 21L11 13L3 11Z" fill="currentColor" />
      </svg>
    </div>
  );
}
