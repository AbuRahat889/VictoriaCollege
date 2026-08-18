import React from "react";

export default function GridYxasis() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-[#0f243a] opacity-55"
          style={{
            left: `${(i + 1) * (100 / 6)}%`,
          }}
        />
      ))}
    </div>
  );
}
