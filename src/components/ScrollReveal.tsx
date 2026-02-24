"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
  stagger,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    [delay]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -60px 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [handleIntersect, threshold]);

  // If stagger is set, apply incremental delays to children
  const styledChildren = stagger
    ? React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<{ style?: React.CSSProperties; className?: string }>, {
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            transitionDelay: isVisible ? `${i * stagger}ms` : "0ms",
          },
        });
      })
    : children;

  const isStagger = !!stagger;

  return (
    <Tag
      ref={ref}
      className={`${
        isStagger
          ? `stagger-children ${isVisible ? "is-visible" : ""}`
          : `${isVisible ? "reveal-visible" : "reveal-hidden"}`
      } ${className}`}
      data-animation={!isStagger ? animation : undefined}
      style={
        !isStagger
          ? ({ "--reveal-duration": `${duration}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {styledChildren}
    </Tag>
  );
}
