import { useRef, useState } from "react";

// Wraps any content and paints a soft radial glow that follows the
// cursor across the card — a common "premium card" touch that makes a
// panel feel alive without being distracting.
const SpotlightCard = ({
  children,
  className = "",
  spotColor = "94, 234, 212", // rgb for mint; pass "167, 139, 250" for violet
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${pos.x}% ${pos.y}%, rgba(${spotColor}, 0.15), transparent 45%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;