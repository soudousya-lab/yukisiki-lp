interface GradientDividerProps {
  from: string;
  to: string;
  className?: string;
}

export default function GradientDivider({
  from,
  to,
  className = "h-16 md:h-24",
}: GradientDividerProps) {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}
