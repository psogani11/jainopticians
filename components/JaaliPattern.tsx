type JaaliPatternProps = {
  id: string;
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
};

/**
 * Signature motif: a lattice drawn from Jaipur's jharokha window screens
 * (interlocking octagons pierced by a diamond aperture — the same geometry
 * that filters light through sandstone into a room, echoing how a lens
 * frames and filters light for the eye). Used as section dividers, hero
 * overlays and quiet background texture throughout the site.
 */
export default function JaaliPattern({
  id,
  color = "#1B1815",
  opacity = 1,
  size = 64,
  className = "",
}: JaaliPatternProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
            {/* octagon */}
            <path
              d={`M ${size * 0.31} ${size * 0.06}
                  L ${size * 0.69} ${size * 0.06}
                  L ${size * 0.94} ${size * 0.31}
                  L ${size * 0.94} ${size * 0.69}
                  L ${size * 0.69} ${size * 0.94}
                  L ${size * 0.31} ${size * 0.94}
                  L ${size * 0.06} ${size * 0.69}
                  L ${size * 0.06} ${size * 0.31}
                  Z`}
            />
            {/* pierced diamond aperture */}
            <path
              d={`M ${size * 0.5} ${size * 0.28}
                  L ${size * 0.72} ${size * 0.5}
                  L ${size * 0.5} ${size * 0.72}
                  L ${size * 0.28} ${size * 0.5}
                  Z`}
            />
            {/* connecting node */}
            <circle cx={size * 0.5} cy={size * 0.5} r={size * 0.03} fill={color} stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
