'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal wrapper. Adds `.reveal` (hidden state) and toggles
 * `.is-visible` once the element enters the viewport, then disconnects.
 * Respects prefers-reduced-motion via the global CSS override.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  stagger = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    'reveal',
    stagger ? 'reveal-group' : '',
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
