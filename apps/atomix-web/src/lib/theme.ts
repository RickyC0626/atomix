import { ElementCategory, ElementPhase } from "./periodic-table";

export const categoryBackgroundColors = {
  [ElementCategory.Actinide]: "bg-teal-700",
  [ElementCategory.AlkaliMetal]: "bg-red-700",
  [ElementCategory.AlkalineEarthMetal]: "bg-violet-700",
  [ElementCategory.Halogen]: "bg-orange-700",
  [ElementCategory.Lanthanide]: "bg-cyan-700",
  [ElementCategory.Metalloid]: "bg-lime-700",
  [ElementCategory.NobleGas]: "bg-amber-700",
  [ElementCategory.Nonmetal]: "bg-yellow-600",
  [ElementCategory.PostTransitionMetal]: "bg-green-700",
  [ElementCategory.TransitionMetal]: "bg-blue-700",
};

export const categoryOutlineColors = {
  [ElementCategory.Actinide]: "outline-teal-500/50",
  [ElementCategory.AlkaliMetal]: "outline-red-500/50",
  [ElementCategory.AlkalineEarthMetal]: "outline-violet-500/50",
  [ElementCategory.Halogen]: "outline-orange-500/50",
  [ElementCategory.Lanthanide]: "outline-cyan-500/50",
  [ElementCategory.Metalloid]: "outline-lime-500/50",
  [ElementCategory.NobleGas]: "outline-amber-500/50",
  [ElementCategory.Nonmetal]: "outline-yellow-400/50",
  [ElementCategory.PostTransitionMetal]: "outline-green-500/50",
  [ElementCategory.TransitionMetal]: "outline-blue-500/50",
};

export const phaseBackgroundColors = {
  [ElementPhase.Gas]: "bg-green-600",
  [ElementPhase.Liquid]: "bg-rose-600",
  [ElementPhase.Solid]: "bg-neutral-600",
  [ElementPhase.ExpectedGas]: "bg-gradient-to-b from-zinc-800/50 via-40% via-zinc-800/50 to-green-800/50",
  [ElementPhase.ExpectedLiquid]: "",
  [ElementPhase.ExpectedSolid]: "bg-gradient-to-b from-zinc-800/50 via-40% via-zinc-800/50 to-neutral-600/50",
};

export const phaseOutlineColors = {
  [ElementPhase.Gas]: "outline-green-500/50",
  [ElementPhase.Liquid]: "outline-rose-500/50",
  [ElementPhase.Solid]: "outline-neutral-500/50",
  [ElementPhase.ExpectedGas]: "outline-green-500/50",
  [ElementPhase.ExpectedLiquid]: "",
  [ElementPhase.ExpectedSolid]: "outline-neutral-500/50",
};
