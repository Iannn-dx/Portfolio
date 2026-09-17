import { useId } from "react";
import { cn } from "../lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-gray-400/20",
        className,
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export default AnimatedGridPattern;
