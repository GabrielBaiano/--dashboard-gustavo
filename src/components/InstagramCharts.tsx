import React, { useState, useRef } from "react";

interface DataPoint {
  label: string;
  value: number;
}

interface AreaChartProps {
  data: DataPoint[];
  color?: string; // 'purple' | 'orange' | 'blue' | 'pink'
  height?: number;
  prefix?: string;
  suffix?: string;
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  color = "purple",
  height = 200,
  prefix = "",
  suffix = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  if (!data || data.length === 0) return <div className="text-center py-10 text-muted">Sem dados disponíveis</div>;

  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;
  const width = 500; // Viewbox logical width

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values) * 1.15 || 10;
  const minValue = Math.min(...values) * 0.85 > 0 ? Math.min(...values) * 0.85 : 0;
  const valueRange = maxValue - minValue || 1;

  // Map data to SVG points
  const points = data.map((d, index) => {
    const x = paddingLeft + (index / (data.length - 1)) * (width - paddingLeft - paddingRight);
    const y = height - paddingBottom - ((d.value - minValue) / valueRange) * (height - paddingTop - paddingBottom);
    return { x, y, label: d.label, value: d.value };
  });

  // Create path string
  let pathD = "";
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      // Use smooth quadratic curve or straight lines
      pathD += ` L ${points[i].x} ${points[i].y}`;
    }
  }

  // Create filled area path
  const areaD = points.length > 0
    ? `${pathD} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`
    : "";

  // Get color styles
  const colors = {
    purple: {
      stroke: "#d946ef", // fuchsia-500
      gradientStart: "rgba(217, 70, 239, 0.4)",
      gradientStop: "rgba(217, 70, 239, 0.0)",
      dot: "#f0abfc",
    },
    orange: {
      stroke: "#f97316", // orange-500
      gradientStart: "rgba(249, 115, 22, 0.4)",
      gradientStop: "rgba(249, 115, 22, 0.0)",
      dot: "#ffedd5",
    },
    blue: {
      stroke: "#06b6d4", // cyan-500
      gradientStart: "rgba(6, 182, 212, 0.4)",
      gradientStop: "rgba(6, 182, 212, 0.0)",
      dot: "#cffafe",
    },
    pink: {
      stroke: "#ec4899", // pink-500
      gradientStart: "rgba(236, 72, 153, 0.4)",
      gradientStop: "rgba(236, 72, 153, 0.0)",
      dot: "#fbcfe8",
    },
  };

  const activeColor = colors[color as keyof typeof colors] || colors.purple;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;

    // Convert clientX to viewbox coordinates
    const scaleX = width / rect.width;
    const viewX = clientX * scaleX;

    // Find closest point
    let closestIndex = 0;
    let minDiff = Infinity;
    points.forEach((p, idx) => {
      const diff = Math.abs(p.x - viewX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setHoveredIndex(closestIndex);
    // Convert back to client coordinates for tooltip placement
    const pt = points[closestIndex];
    const scaleY = rect.height / height;
    setTooltipPos({
      x: pt.x / scaleX,
      y: pt.y * scaleY - 45,
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toLocaleString();
  };

  // Generate grid values
  const gridLines = 3;
  const gridValues = Array.from({ length: gridLines }).map((_, idx) => {
    const val = minValue + (idx / (gridLines - 1)) * valueRange;
    const y = height - paddingBottom - (idx / (gridLines - 1)) * (height - paddingTop - paddingBottom);
    return { val, y };
  });

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        className="w-full select-none overflow-visible"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        onMouseLeave={() => setHoveredIndex(null)}
        onMouseMove={handleMouseMove}
      >
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={activeColor.gradientStart} />
            <stop offset="100%" stopColor={activeColor.gradientStop} />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {gridValues.map((line, idx) => (
          <g key={idx}>
            <line
              className="stroke-zinc-800/80"
              strokeDasharray="4 4"
              x1={paddingLeft}
              x2={width - paddingRight}
              y1={line.y}
              y2={line.y}
            />
            <text
              alignmentBaseline="middle"
              className="fill-zinc-500 text-[10px] font-medium"
              textAnchor="end"
              x={paddingLeft - 8}
              y={line.y}
            >
              {prefix}{formatNumber(line.val)}{suffix}
            </text>
          </g>
        ))}

        {/* Areas & Paths */}
        {points.length > 0 && (
          <>
            <path d={areaD} fill={`url(#gradient-${color})`} />
            <path
              className="transition-all duration-300"
              d={pathD}
              fill="none"
              stroke={activeColor.stroke}
              strokeWidth="2.5"
            />
          </>
        )}

        {/* X Axis Labels */}
        {points.map((p, idx) => (
          <text
            key={idx}
            className="fill-zinc-500 text-[10px] font-semibold"
            textAnchor="middle"
            x={p.x}
            y={height - 8}
          >
            {p.label}
          </text>
        ))}

        {/* Vertical marker on hover */}
        {hoveredIndex !== null && (
          <line
            className="stroke-zinc-600/50"
            strokeDasharray="2 2"
            x1={points[hoveredIndex].x}
            x2={points[hoveredIndex].x}
            y1={paddingTop}
            y2={height - paddingBottom}
          />
        )}

        {/* Dots on line */}
        {points.map((p, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <circle
              key={idx}
              className="cursor-pointer transition-all duration-200"
              cx={p.x}
              cy={p.y}
              fill={isHovered ? "#ffffff" : activeColor.stroke}
              r={isHovered ? 6 : 4}
              stroke={activeColor.stroke}
              strokeWidth={isHovered ? 2 : 0}
            />
          );
        })}
      </svg>

      {/* Floating HTML Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute z-10 pointer-events-none transform -translate-x-1/2 flex flex-col items-center bg-zinc-950/95 border border-zinc-800 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md transition-all duration-75"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
        >
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
            {data[hoveredIndex].label}
          </span>
          <span className="text-sm font-bold text-white mt-0.5">
            {prefix}
            {data[hoveredIndex].value.toLocaleString()}
            {suffix}
          </span>
        </div>
      )}
    </div>
  );
};

interface CompareBarChartProps {
  label1: string;
  value1: number;
  label2: string;
  value2: number;
  title: string;
  prefix?: string;
  suffix?: string;
}

export const CompareBarChart: React.FC<CompareBarChartProps> = ({
  label1,
  value1,
  label2,
  value2,
  title,
  prefix = "",
  suffix = "",
}) => {
  const max = Math.max(value1, value2) || 1;
  const pct1 = (value1 / max) * 100;
  const pct2 = (value2 / max) * 100;

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toLocaleString();
  };

  return (
    <div className="flex flex-col gap-2 w-full p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
      <div className="flex justify-between items-center text-xs font-semibold text-zinc-400">
        <span>{title}</span>
      </div>

      <div className="space-y-3 mt-1">
        {/* Profile 1 Bar */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-zinc-300 font-medium truncate max-w-[150px]">{label1}</span>
            <span className="text-white font-bold text-sm">
              {prefix}{formatNumber(value1)}{suffix}
            </span>
          </div>
          <div className="w-full bg-zinc-800/60 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${pct1}%` }}
            />
          </div>
        </div>

        {/* Profile 2 Bar */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-zinc-300 font-medium truncate max-w-[150px]">{label2}</span>
            <span className="text-white font-bold text-sm font-mono">
              {prefix}{formatNumber(value2)}{suffix}
            </span>
          </div>
          <div className="w-full bg-zinc-800/60 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${pct2}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface HeatmapProps {
  data: { hour: string; value: number }[];
}

export const HeatmapChart: React.FC<HeatmapProps> = ({ data }) => {
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  
  // We mock a full 7x8 matrix of days vs hours based on the hour profile
  const gridCells = days.flatMap((day) => 
    data.map((h) => {
      // Add slight randomness based on day to make heatmap organic and interesting
      const baseValue = h.value;
      const dayFactor = day === "Sáb" || day === "Dom" ? 1.2 : 0.9;
      const val = Math.min(100, Math.round(baseValue * dayFactor * (0.85 + Math.random() * 0.3)));
      return { day, hour: h.hour, value: val };
    })
  );

  const getHeatmapColor = (value: number) => {
    // Return colors with opacity according to engagement value
    if (value > 85) return "bg-fuchsia-600 shadow-[0_0_8px_rgba(217,70,239,0.3)]";
    if (value > 65) return "bg-fuchsia-500/80";
    if (value > 45) return "bg-fuchsia-500/50";
    if (value > 25) return "bg-fuchsia-500/35";
    return "bg-zinc-800/40 border border-zinc-800/10";
  };

  return (
    <div className="w-full flex flex-col overflow-x-auto select-none">
      <div className="min-w-[400px]">
        {/* Hours Header */}
        <div className="flex mb-1 pl-10">
          {data.map((h, i) => (
            <div key={i} className="flex-1 text-[10px] font-semibold text-zinc-500 text-center">
              {h.hour}
            </div>
          ))}
        </div>

        {/* Heatmap Rows */}
        <div className="space-y-1.5">
          {days.map((day, dayIdx) => (
            <div key={dayIdx} className="flex items-center">
              {/* Day label */}
              <div className="w-10 text-xs font-bold text-zinc-400 text-left">
                {day}
              </div>
              
              {/* Day cells */}
              <div className="flex-1 flex gap-1.5">
                {gridCells
                  .filter((cell) => cell.day === day)
                  .map((cell, cellIdx) => (
                    <div
                      key={cellIdx}
                      className={`flex-1 aspect-[16/10] rounded-sm transition-all duration-300 hover:scale-110 cursor-pointer ${getHeatmapColor(cell.value)}`}
                      title={`${day} às ${cell.hour} - Engajamento: ${cell.value}%`}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4 text-[10px] font-bold text-zinc-400 px-2 items-center">
          <span>Menos Engajamento</span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800/40" />
            <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500/35" />
            <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500/50" />
            <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500/80" />
            <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-600" />
          </div>
          <span>Mais Engajamento</span>
        </div>
      </div>
    </div>
  );
};
