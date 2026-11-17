import React from "react";

/**
 * Hand-drawn 16x16 pixel-art icons. Every icon is raw cell data — no image
 * assets, scales crisply at any size. shape-rendering="crispEdges" keeps
 * the blocks sharp.
 */

type Cell = [x: number, y: number, c: string];

const PAL: Record<string, string> = {
  K: "#101418",
  G: "#57a02b",
  g: "#3e7a1c",
  D: "#6b4a30",
  d: "#5c3f2a",
  Br: "#8a5a2b",
  S: "#8b8b8b",
  s: "#5a5a5a",
  W: "#ece9e2",
  X: "#7ef03c",
  A: "#f2a71b",
  B: "#4aa3df",
  T: "#2ec4b6",
  P: "#9a6cff",
  R: "#e5484d",
  Y: "#f5d90a",
  O: "#f97316",
};

/** expand a rect into 1x1 cells */
function rect(x: number, y: number, w: number, h: number, c: string): Cell[] {
  const out: Cell[] = [];
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) out.push([x + i, y + j, c]);
  return out;
}
/** single pixels */
function dots(list: Array<[number, number]>, c: string): Cell[] {
  return list.map(([x, y]) => [x, y, c] as Cell);
}

/* ---- grass block: mottled grass cap over dirt ---- */
const GRASS: Cell[] = [];
for (let y = 0; y < 4; y++)
  for (let x = 0; x < 16; x++) GRASS.push([x, y, (x + y) % 3 === 0 ? "g" : "G"]);
for (let y = 4; y < 16; y++)
  for (let x = 0; x < 16; x++) GRASS.push([x, y, (x * 7 + y * 5) % 5 === 0 ? "d" : "D"]);

/* ---- creeper: mottled green + the face ---- */
const CREEPER: Cell[] = [
  ...Array.from({ length: 256 }, (_, i) => {
    const x = i % 16;
    const y = Math.floor(i / 16);
    return [x, y, (x + y) % 2 === 0 ? "G" : "g"] as Cell;
  }),
  ...rect(2, 4, 4, 4, "K"),
  ...rect(10, 4, 4, 4, "K"),
  ...rect(6, 8, 4, 8, "K"),
  ...rect(4, 10, 2, 6, "K"),
  ...rect(10, 10, 2, 6, "K"),
];

const ICONS: Record<string, Cell[]> = {
  grass: GRASS,
  creeper: CREEPER,
  drone: [
    ...rect(1, 1, 3, 3, "S"),
    ...rect(12, 1, 3, 3, "S"),
    ...rect(1, 12, 3, 3, "S"),
    ...rect(12, 12, 3, 3, "S"),
    ...dots(
      [
        [2, 2],
        [13, 2],
        [2, 13],
        [13, 13],
      ],
      "A"
    ),
    ...rect(4, 4, 8, 1, "s"),
    ...rect(4, 11, 8, 1, "s"),
    ...rect(4, 4, 1, 8, "s"),
    ...rect(11, 4, 1, 8, "s"),
    ...rect(6, 6, 4, 4, "s"),
    ...rect(7, 7, 2, 2, "K"),
    ...rect(7, 10, 2, 1, "T"),
    ...dots([[8, 6]], "X"),
  ],
  drop: [
    ...rect(7, 2, 2, 2, "B"),
    ...rect(6, 3, 4, 2, "B"),
    ...rect(5, 4, 6, 2, "B"),
    ...rect(4, 6, 8, 5, "B"),
    ...rect(5, 11, 6, 2, "B"),
    ...rect(6, 13, 4, 1, "B"),
    ...rect(5, 6, 1, 3, "T"),
    ...dots([[9, 6], [9, 7]], "W"),
  ],
  wheat: [
    ...rect(7, 6, 2, 9, "g"),
    ...rect(6, 2, 4, 2, "Y"),
    ...rect(7, 1, 2, 1, "Y"),
    ...rect(5, 4, 3, 2, "Y"),
    ...rect(8, 4, 3, 2, "Y"),
    ...rect(5, 7, 3, 2, "Y"),
    ...rect(8, 7, 3, 2, "Y"),
    ...dots([[5, 10], [10, 10]], "Y"),
  ],
  crafting: [
    ...rect(2, 3, 12, 10, "Br"),
    ...rect(2, 3, 12, 1, "d"),
    ...rect(2, 12, 12, 1, "d"),
    ...rect(2, 3, 1, 10, "d"),
    ...rect(13, 3, 1, 10, "d"),
    ...rect(7, 4, 2, 8, "K"),
    ...rect(4, 7, 8, 2, "K"),
    ...rect(3, 13, 2, 2, "d"),
    ...rect(11, 13, 2, 2, "d"),
  ],
  book: [
    ...rect(3, 2, 10, 12, "P"),
    ...rect(3, 2, 2, 12, "K"),
    ...rect(12, 2, 1, 12, "W"),
    ...dots(
      [
        [12, 1],
        [14, 3],
        [11, 14],
      ],
      "X"
    ),
  ],
  cmd: [
    ...rect(2, 3, 12, 10, "O"),
    ...rect(2, 11, 12, 2, "d"),
    ...rect(2, 3, 12, 1, "K"),
    ...rect(5, 6, 1, 2, "W"),
    ...rect(6, 7, 1, 2, "W"),
    ...rect(7, 8, 1, 2, "W"),
    ...rect(9, 10, 3, 1, "W"),
  ],
  redstone: [
    ...dots(
      Array.from({ length: 10 }, (_, i) => [3 + i, 3 + i] as [number, number]),
      "R"
    ),
    ...dots(
      Array.from({ length: 10 }, (_, i) => [12 - i, 3 + i] as [number, number]),
      "R"
    ),
    ...rect(7, 7, 2, 2, "Y"),
  ],
  chest: [
    ...rect(2, 4, 12, 9, "Br"),
    ...rect(2, 7, 12, 1, "K"),
    ...rect(7, 6, 2, 3, "A"),
    ...rect(2, 4, 12, 1, "d"),
    ...rect(2, 12, 12, 1, "d"),
    ...rect(2, 4, 1, 9, "d"),
    ...rect(13, 4, 1, 9, "d"),
  ],
  bed: [
    ...rect(2, 5, 2, 6, "Br"),
    ...rect(4, 8, 10, 2, "W"),
    ...rect(6, 6, 8, 2, "R"),
    ...rect(4, 10, 10, 1, "Br"),
    ...rect(3, 11, 1, 3, "d"),
    ...rect(12, 11, 1, 3, "d"),
  ],
  apple: [
    ...rect(5, 6, 6, 6, "A"),
    ...rect(4, 7, 8, 4, "A"),
    ...rect(6, 5, 4, 1, "A"),
    ...rect(6, 12, 4, 1, "A"),
    ...rect(8, 3, 1, 2, "Br"),
    ...rect(9, 2, 2, 2, "G"),
    ...rect(5, 7, 1, 3, "W"),
  ],
  note: [
    ...rect(2, 4, 12, 9, "Br"),
    ...rect(2, 4, 12, 1, "K"),
    ...rect(3, 5, 10, 7, "d"),
    ...rect(9, 5, 1, 4, "W"),
    ...rect(7, 8, 2, 2, "W"),
    ...rect(10, 5, 2, 1, "W"),
  ],
  portal: [
    ...rect(4, 4, 8, 8, "K"),
    ...rect(4, 3, 8, 1, "P"),
    ...rect(4, 12, 8, 1, "P"),
    ...rect(3, 4, 1, 8, "P"),
    ...rect(12, 4, 1, 8, "P"),
    ...rect(7, 6, 2, 2, "W"),
    ...dots(
      [
        [6, 9],
        [9, 5],
        [3, 3],
        [12, 12],
      ],
      "P"
    ),
  ],
  trophy: [
    ...rect(5, 3, 6, 4, "Y"),
    ...rect(3, 3, 1, 3, "Y"),
    ...rect(12, 3, 1, 3, "Y"),
    ...rect(7, 7, 2, 3, "Y"),
    ...rect(5, 10, 6, 2, "A"),
    ...rect(6, 4, 1, 2, "W"),
  ],
  medal: [
    ...rect(6, 1, 2, 4, "R"),
    ...rect(9, 1, 2, 4, "B"),
    ...rect(6, 5, 5, 7, "A"),
    ...rect(5, 6, 7, 5, "A"),
    ...rect(7, 7, 3, 3, "Y"),
  ],
  star: [
    ...rect(7, 2, 2, 12, "Y"),
    ...rect(2, 7, 12, 2, "Y"),
    ...dots(
      [
        [5, 5],
        [10, 5],
        [5, 10],
        [10, 10],
      ],
      "Y"
    ),
    ...rect(7, 7, 2, 2, "W"),
  ],
  mic: [
    ...rect(5, 1, 6, 2, "s"),
    ...rect(4, 2, 8, 4, "s"),
    ...rect(5, 6, 6, 1, "s"),
    ...rect(6, 3, 4, 2, "K"),
    ...rect(7, 7, 2, 4, "W"),
    ...rect(5, 11, 6, 1, "s"),
    ...rect(4, 12, 8, 2, "s"),
  ],
  globe: [
    ...rect(5, 2, 6, 1, "B"),
    ...rect(4, 3, 8, 10, "B"),
    ...rect(5, 13, 6, 1, "B"),
    ...rect(6, 4, 3, 2, "G"),
    ...rect(9, 8, 3, 2, "G"),
    ...rect(5, 9, 2, 2, "G"),
    ...rect(7, 3, 2, 10, "T"),
  ],
  flask: [
    ...rect(6, 1, 4, 1, "W"),
    ...rect(7, 1, 2, 3, "W"),
    ...rect(6, 4, 4, 2, "T"),
    ...rect(5, 6, 6, 6, "T"),
    ...rect(6, 12, 4, 1, "T"),
    ...dots(
      [
        [7, 8],
        [9, 10],
      ],
      "W"
    ),
  ],
  pickaxe: [
    ...dots(
      [
        [2, 6],
        [3, 5],
        [4, 4],
        [5, 3],
        [6, 3],
        [7, 3],
        [8, 3],
        [9, 4],
        [10, 5],
        [11, 6],
        [12, 7],
      ],
      "T"
    ),
    ...dots(
      [
        [4, 7],
        [5, 8],
        [6, 9],
        [7, 10],
        [8, 11],
        [9, 12],
      ],
      "Br"
    ),
  ],
  diamond: [
    ...rect(5, 4, 6, 1, "T"),
    ...rect(3, 5, 10, 2, "T"),
    ...rect(4, 7, 8, 1, "T"),
    ...rect(5, 8, 6, 1, "T"),
    ...rect(6, 9, 4, 1, "T"),
    ...rect(7, 10, 2, 1, "T"),
    ...rect(5, 5, 1, 2, "W"),
  ],
  heart: [
    ...rect(4, 3, 3, 1, "R"),
    ...rect(9, 3, 3, 1, "R"),
    ...rect(3, 4, 10, 3, "R"),
    ...rect(4, 7, 8, 1, "R"),
    ...rect(5, 8, 6, 1, "R"),
    ...rect(6, 9, 4, 1, "R"),
    ...rect(7, 10, 2, 1, "R"),
    ...rect(4, 4, 1, 2, "W"),
  ],
  bottle: [
    ...rect(7, 1, 2, 2, "Br"),
    ...rect(7, 3, 2, 1, "W"),
    ...rect(5, 4, 6, 8, "X"),
    ...rect(4, 5, 8, 6, "X"),
    ...rect(5, 5, 1, 3, "W"),
  ],
};

export function PixelArt({ cells, size = 32, className }: { cells: Cell[]; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {cells.map(([x, y, c], i) => (
        <rect key={i} x={x} y={y} width={1} height={1} fill={PAL[c] ?? c} />
      ))}
    </svg>
  );
}

export function PixelIcon({ name, size = 32, className }: { name: string; size?: number; className?: string }) {
  const cells = ICONS[name] ?? ICONS.star;
  return <PixelArt cells={cells} size={size} className={className} />;
}
