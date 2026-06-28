import { Send } from "lucide-react";
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
      <Send
        className={cn("", iconClassName)}
        style={{ width: size * 0.44, height: size * 0.44 }}
        strokeWidth={2}
      />
    </div>
  );
}
