export enum ElementCategory {
  Actinide = "Actinide",
  AlkaliMetal = "Alkali Metal",
  AlkalineEarthMetal = "Alkaline Earth Metal",
  Halogen = "Halogen",
  Lanthanide = "Lanthanide",
  Metalloid = "Metalloid",
  NobleGas = "Noble Gas",
  Nonmetal = "Nonmetal",
  PostTransitionMetal = "Post-Transition Metal",
  TransitionMetal = "Transition Metal",
}

export type PeriodicElement = {
  name: string;
  symbol: string;
  atomic_mass: number;
  atomic_number: number;
  group: number;
  period: number;
  category: ElementCategory; 
};

export const elements: PeriodicElement[] = [
  {
    name: "Hydrogen",
    symbol: "H",
    atomic_mass: 1.008,
    atomic_number: 1,
    group: 1,
    period: 1,
    category: ElementCategory.Nonmetal,
  },
  {
    name: "Helium",
    symbol: "He",
    atomic_mass: 4.0026,
    atomic_number: 2,
    group: 18,
    period: 1,
    category: ElementCategory.AlkaliMetal,
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomic_mass: 7.0,
    atomic_number: 3,
    group: 1,
    period: 2,
    category: ElementCategory.AlkaliMetal,
  },
  {
    name: "Beryllium",
    symbol: "Be",
    atomic_mass: 9.012183,
    atomic_number: 4,
    group: 2,
    period: 2,
    category: ElementCategory.AlkalineEarthMetal,
  },
  {
    name: "Boron",
    symbol: "B",
    atomic_mass: 10.81,
    atomic_number: 5,
    group: 13,
    period: 2,
    category: ElementCategory.Metalloid,
  },
  {
    name: "Carbon",
    symbol: "C",
    atomic_mass: 12.011,
    atomic_number: 6,
    group: 14,
    period: 2,
    category: ElementCategory.Nonmetal,
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomic_mass: 14.007,
    atomic_number: 7,
    group: 15,
    period: 2,
    category: ElementCategory.Nonmetal,
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomic_mass: 15.999,
    atomic_number: 8,
    group: 16,
    period: 2,
    category: ElementCategory.Nonmetal,
  },
  {
    name: "Fluorine",
    symbol: "F",
    atomic_mass: 18.99840316,
    atomic_number: 9,
    group: 17,
    period: 2,
    category: ElementCategory.Halogen,
  },
  {
    name: "Neon",
    symbol: "Ne",
    atomic_mass: 20.180,
    atomic_number: 10,
    group: 18,
    period: 2,
    category: ElementCategory.NobleGas,
  },
];
