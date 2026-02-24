interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function ShimmerText({
  children,
  className = "",
  as: Tag = "span",
}: ShimmerTextProps) {
  return <Tag className={`text-gold-shimmer ${className}`}>{children}</Tag>;
}
