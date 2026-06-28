import {
  Send,
  Droplet,
  Leaf,
  Package,
  Cog,
  Banknote,
  Sparkles,
  Bookmark,
  Play,
  Asterisk,
  MessageCircle,
  Heart,
  CircleCheck,
  Calendar,
  Phone,
  MapPin,
  type LucideProps,
} from "lucide-react";

const icons = {
  Send,
  Droplet,
  Leaf,
  Package,
  Cog,
  Banknote,
  Sparkles,
  Bookmark,
  Play,
  Asterisk,
  MessageCircle,
  Heart,
  CircleCheck,
  Calendar,
  Phone,
  MapPin,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const IconComponent = icons[name as IconName];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
