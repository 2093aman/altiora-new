export const ICON_GRADIENTS = [
  "from-pink-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-red-500 to-orange-500",
  "from-yellow-500 to-orange-500",
  "from-teal-500 to-cyan-500",
];

export const iconGradient = (index: number) =>
  ICON_GRADIENTS[Math.abs(index) % ICON_GRADIENTS.length];
