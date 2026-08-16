import { useRef } from "react";
import { motion } from "framer-motion";

// Wraps any element and nudges it toward the cursor on hover, like a
// magnet — a small, playful signal that the UI is alive.
const MagneticButton = ({ children, className = "", strength = 0.35, ...props }) => {
  const ref = useRef(null);
  const x = useRef(0);
  const y = useRef(0);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.current = (e.clientX - (rect.left + rect.width / 2)) * strength;
    y.current = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate(${x.current}px, ${y.current}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease-out" }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
