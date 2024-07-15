import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  threshold?: number;
  duration?: string;
  x?: number;
  y?: number;
  delay?: string;
  zIndex?: number;
  className?: string;
};
const animation = ({
  children,
  threshold,
  duration,
  x,
  y,
  delay,
  zIndex,
  className,
}: Props) => {
  x = x || 0;
  y = y || 0;
  zIndex = zIndex || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [intersecting]);
  useEffect(() => {
    if (count < 1) {
      if (ref.current) {
        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setIntersecting(true);
            } else {
              // setIntersecting(false);
            }
          },
          {
            threshold,
          }
        );

        intersectionObserver.observe(ref.current);

        // return () => {
        //   if (ref.current) {
        //     intersectionObserver.unobserve(ref.current);
        //   }
        // };
      }
    }
  }, [count]);
  return (
    <div
      style={{
        transitionDelay: delay,
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : "translate(0px, 0px)",
        zIndex: zIndex,
      }}
      className={`${className} transition ${
        intersecting ? "opacity-100" : `opacity-0`
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
};
export default animation;
