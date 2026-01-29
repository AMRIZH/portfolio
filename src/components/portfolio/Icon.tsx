import { SVGS } from "../../lib/constants";

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "w-4 h-4" }: IconProps) {
  const svg = SVGS[name as keyof typeof SVGS];
  if (!svg) return null;
  return <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}
