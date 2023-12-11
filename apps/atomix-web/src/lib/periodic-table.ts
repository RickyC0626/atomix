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
  gridX: number;
  gridY: number;
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
    gridX: 1,
    gridY: 1,
  },
  {
    name: "Helium",
    symbol: "He",
    atomic_mass: 4.0026,
    atomic_number: 2,
    group: 18,
    period: 1,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 1,
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomic_mass: 7.0,
    atomic_number: 3,
    group: 1,
    period: 2,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 2,
  },
  {
    name: "Beryllium",
    symbol: "Be",
    atomic_mass: 9.012183,
    atomic_number: 4,
    group: 2,
    period: 2,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 2,
  },
  {
    name: "Boron",
    symbol: "B",
    atomic_mass: 10.81,
    atomic_number: 5,
    group: 13,
    period: 2,
    category: ElementCategory.Metalloid,
    gridX: 13,
    gridY: 2,
  },
  {
    name: "Carbon",
    symbol: "C",
    atomic_mass: 12.011,
    atomic_number: 6,
    group: 14,
    period: 2,
    category: ElementCategory.Nonmetal,
    gridX: 14,
    gridY: 2,
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomic_mass: 14.007,
    atomic_number: 7,
    group: 15,
    period: 2,
    category: ElementCategory.Nonmetal,
    gridX: 15,
    gridY: 2,
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomic_mass: 15.999,
    atomic_number: 8,
    group: 16,
    period: 2,
    category: ElementCategory.Nonmetal,
    gridX: 16,
    gridY: 2,
  },
  {
    name: "Fluorine",
    symbol: "F",
    atomic_mass: 18.99840316,
    atomic_number: 9,
    group: 17,
    period: 2,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 2,
  },
  {
    name: "Neon",
    symbol: "Ne",
    atomic_mass: 20.180,
    atomic_number: 10,
    group: 18,
    period: 2,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 2,
  },
  {
    name: "Sodium",
    symbol: "Na",
    atomic_mass: 22.9897693,
    atomic_number: 11,
    group: 1,
    period: 3,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 3,
  },
  {
    name: "Magnesium",
    symbol: "Mg",
    atomic_mass: 24.305,
    atomic_number: 12,
    group: 2,
    period: 3,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 3,
  },
  {
    name: "Aluminum",
    symbol: "Al",
    atomic_mass: 26.981538,
    atomic_number: 13,
    group: 13,
    period: 3,
    category: ElementCategory.PostTransitionMetal,
    gridX: 13,
    gridY: 3,
  },
  {
    name: "Silicon",
    symbol: "Si",
    atomic_mass: 28.085,
    atomic_number: 14,
    group: 14,
    period: 3,
    category: ElementCategory.Metalloid,
    gridX: 14,
    gridY: 3,
  },
  {
    name: "Phosphorus",
    symbol: "P",
    atomic_mass: 30.973762,
    atomic_number: 15,
    group: 15,
    period: 3,
    category: ElementCategory.Nonmetal,
    gridX: 15,
    gridY: 3,
  },
  {
    name: "Sulfur",
    symbol: "S",
    atomic_mass: 32.07,
    atomic_number: 16,
    group: 16,
    period: 3,
    category: ElementCategory.Nonmetal,
    gridX: 16,
    gridY: 3,
  },
  {
    name: "Chlorine",
    symbol: "Cl",
    atomic_mass: 35.45,
    atomic_number: 17,
    group: 17,
    period: 3,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 3,
  },
  {
    name: "Argon",
    symbol: "Ar",
    atomic_mass: 39.9,
    atomic_number: 18,
    group: 18,
    period: 3,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 3,
  },
  {
    name: "Potassium",
    symbol: "K",
    atomic_mass: 39.0983,
    atomic_number: 19,
    group: 1,
    period: 4,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 4,
  },
  {
    name: "Calcium",
    symbol: "Ca",
    atomic_mass: 40.08,
    atomic_number: 20,
    group: 2,
    period: 4,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 4,
  },
  {
    name: "Scandium",
    symbol: "Sc",
    atomic_mass: 44.95591,
    atomic_number: 21,
    group: 3,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 3,
    gridY: 4,
  },
  {
    name: "Titanium",
    symbol: "Ti",
    atomic_mass: 47.867,
    atomic_number: 22,
    group: 4,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 4,
    gridY: 4,
  },
  {
    name: "Vanadium",
    symbol: "V",
    atomic_mass: 50.9415,
    atomic_number: 23,
    group: 5,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 5,
    gridY: 4,
  },
  {
    name: "Chromium",
    symbol: "Cr",
    atomic_mass: 51.996,
    atomic_number: 24,
    group: 6,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 6,
    gridY: 4,
  },
  {
    name: "Manganese",
    symbol: "Mn",
    atomic_mass: 54.93804,
    atomic_number: 25,
    group: 7,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 7,
    gridY: 4,
  },
  {
    name: "Iron",
    symbol: "Fe",
    atomic_mass: 55.84,
    atomic_number: 26,
    group: 8,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 8,
    gridY: 4,
  },
  {
    name: "Cobalt",
    symbol: "Co",
    atomic_mass: 58.93319,
    atomic_number: 27,
    group: 9,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 9,
    gridY: 4,
  },
  {
    name: "Nickel",
    symbol: "Ni",
    atomic_mass: 58.693,
    atomic_number: 28,
    group: 10,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 10,
    gridY: 4,
  },
  {
    name: "Copper",
    symbol: "Cu",
    atomic_mass: 63.55,
    atomic_number: 29,
    group: 11,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 11,
    gridY: 4,
  },
  {
    name: "Zinc",
    symbol: "Zn",
    atomic_mass: 65.4,
    atomic_number: 30,
    group: 12,
    period: 4,
    category: ElementCategory.TransitionMetal,
    gridX: 12,
    gridY: 4,
  },
  {
    name: "Gallium",
    symbol: "Ga",
    atomic_mass: 69.723,
    atomic_number: 31,
    group: 13,
    period: 4,
    category: ElementCategory.PostTransitionMetal,
    gridX: 13,
    gridY: 4,
  },
  {
    name: "Germanium",
    symbol: "Ge",
    atomic_mass: 72.63,
    atomic_number: 32,
    group: 14,
    period: 4,
    category: ElementCategory.Metalloid,
    gridX: 14,
    gridY: 4,
  },
  {
    name: "Arsenic",
    symbol: "As",
    atomic_mass: 74.92159,
    atomic_number: 33,
    group: 15,
    period: 4,
    category: ElementCategory.Metalloid,
    gridX: 15,
    gridY: 4,
  },
  {
    name: "Selenium",
    symbol: "Se",
    atomic_mass: 78.97,
    atomic_number: 34,
    group: 16,
    period: 4,
    category: ElementCategory.Nonmetal,
    gridX: 16,
    gridY: 4,
  },
  {
    name: "Bromine",
    symbol: "Br",
    atomic_mass: 79.9,
    atomic_number: 35,
    group: 17,
    period: 4,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 4,
  },
  {
    name: "Krypton",
    symbol: "Kr",
    atomic_mass: 83.8,
    atomic_number: 36,
    group: 18,
    period: 4,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 4,
  },
  {
    name: "Rubidium",
    symbol: "Rb",
    atomic_mass: 85.468,
    atomic_number: 37,
    group: 1,
    period: 5,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 5,
  },
  {
    name: "Strontium",
    symbol: "Sr",
    atomic_mass: 87.62,
    atomic_number: 38,
    group: 2,
    period: 5,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 5,
  },
  {
    name: "Yttrium",
    symbol: "Y",
    atomic_mass: 88.90584,
    atomic_number: 39,
    group: 3,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 3,
    gridY: 5,
  },
  {
    name: "Zirconium",
    symbol: "Zr",
    atomic_mass: 91.22,
    atomic_number: 40,
    group: 4,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 4,
    gridY: 5,
  },
  {
    name: "Niobium",
    symbol: "Nb",
    atomic_mass: 92.90637,
    atomic_number: 41,
    group: 5,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 5,
    gridY: 5,
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    atomic_mass: 95.95,
    atomic_number: 42,
    group: 6,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 6,
    gridY: 5,
  },
  {
    name: "Technetium",
    symbol: "Tc",
    atomic_mass: 96.90636,
    atomic_number: 43,
    group: 7,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 7,
    gridY: 5,
  },
  {
    name: "Ruthenium",
    symbol: "Ru",
    atomic_mass: 101.1,
    atomic_number: 44,
    group: 8,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 8,
    gridY: 5,
  },
  {
    name: "Rhodium",
    symbol: "Rh",
    atomic_mass: 102.9055,
    atomic_number: 45,
    group: 9,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 9,
    gridY: 5,
  },
  {
    name: "Palladium",
    symbol: "Pd",
    atomic_mass: 106.42,
    atomic_number: 46,
    group: 10,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 10,
    gridY: 5,
  },
  {
    name: "Silver",
    symbol: "Ag",
    atomic_mass: 107.868,
    atomic_number: 47,
    group: 11,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 11,
    gridY: 5,
  },
  {
    name: "Cadmium",
    symbol: "Cd",
    atomic_mass: 112.41,
    atomic_number: 48,
    group: 12,
    period: 5,
    category: ElementCategory.TransitionMetal,
    gridX: 12,
    gridY: 5,
  },
  {
    name: "Indium",
    symbol: "In",
    atomic_mass: 114.818,
    atomic_number: 49,
    group: 13,
    period: 5,
    category: ElementCategory.PostTransitionMetal,
    gridX: 13,
    gridY: 5,
  },
  {
    name: "Tin",
    symbol: "Sn",
    atomic_mass: 118.71,
    atomic_number: 50,
    group: 14,
    period: 5,
    category: ElementCategory.PostTransitionMetal,
    gridX: 14,
    gridY: 5,
  },
  {
    name: "Antimony",
    symbol: "Sb",
    atomic_mass: 121.76,
    atomic_number: 51,
    group: 15,
    period: 5,
    category: ElementCategory.Metalloid,
    gridX: 15,
    gridY: 5,
  },
  {
    name: "Tellurium",
    symbol: "Te",
    atomic_mass: 127.6,
    atomic_number: 52,
    group: 16,
    period: 5,
    category: ElementCategory.Metalloid,
    gridX: 16,
    gridY: 5,
  },
  {
    name: "Iodine",
    symbol: "I",
    atomic_mass: 126.9045,
    atomic_number: 53,
    group: 17,
    period: 5,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 5,
  },
  {
    name: "Xenon",
    symbol: "Xe",
    atomic_mass: 131.29,
    atomic_number: 54,
    group: 18,
    period: 5,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 5,
  },
  {
    name: "Cesium",
    symbol: "Cs",
    atomic_mass: 132.905452,
    atomic_number: 55,
    group: 1,
    period: 6,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 6,
  },
  {
    name: "Barium",
    symbol: "Ba",
    atomic_mass: 137.33,
    atomic_number: 56,
    group: 2,
    period: 6,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 6,
  },
  {
    name: "Lanthanum",
    symbol: "La",
    atomic_mass: 138.9055,
    atomic_number: 57,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 4,
    gridY: 8,
  },
  {
    name: "Cerium",
    symbol: "Ce",
    atomic_mass: 140.116,
    atomic_number: 58,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 5,
    gridY: 8,
  },
  {
    name: "Praseodymium",
    symbol: "Pr",
    atomic_mass: 140.90766,
    atomic_number: 59,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 6,
    gridY: 8,
  },
  {
    name: "Neodymium",
    symbol: "Nd",
    atomic_mass: 144.24,
    atomic_number: 60,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 7,
    gridY: 8,
  },
  {
    name: "Promethium",
    symbol: "Pm",
    atomic_mass: 144.91276,
    atomic_number: 61,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 8,
    gridY: 8,
  },
  {
    name: "Samarium",
    symbol: "Sm",
    atomic_mass: 150.4,
    atomic_number: 62,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 9,
    gridY: 8,
  },
  {
    name: "Europium",
    symbol: "Eu",
    atomic_mass: 151.964,
    atomic_number: 63,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 10,
    gridY: 8,
  },
  {
    name: "Gadolinium",
    symbol: "Gd",
    atomic_mass: 157.2,
    atomic_number: 64,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 11,
    gridY: 8,
  },
  {
    name: "Terbium",
    symbol: "Tb",
    atomic_mass: 158.92535,
    atomic_number: 65,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 12,
    gridY: 8,
  },
  {
    name: "Dysprosium",
    symbol: "Dy",
    atomic_mass: 162.5,
    atomic_number: 66,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 13,
    gridY: 8,
  },
  {
    name: "Holmium",
    symbol: "Ho",
    atomic_mass: 164.93033,
    atomic_number: 67,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 14,
    gridY: 8,
  },
  {
    name: "Erbium",
    symbol: "Er",
    atomic_mass: 167.26,
    atomic_number: 68,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 15,
    gridY: 8,
  },
  {
    name: "Thulium",
    symbol: "Tm",
    atomic_mass: 168.93422,
    atomic_number: 69,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 16,
    gridY: 8,
  },
  {
    name: "Ytterbium",
    symbol: "Yb",
    atomic_mass: 173.05,
    atomic_number: 70,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 17,
    gridY: 8,
  },
  {
    name: "Lutetium",
    symbol: "Lu",
    atomic_mass: 174.9668,
    atomic_number: 71,
    group: 3,
    period: 6,
    category: ElementCategory.Lanthanide,
    gridX: 18,
    gridY: 8,
  },
  {
    name: "Hafnium",
    symbol: "Hf",
    atomic_mass: 178.49,
    atomic_number: 72,
    group: 4,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 4,
    gridY: 6,
  },
  {
    name: "Tantalum",
    symbol: "Ta",
    atomic_mass: 180.9479,
    atomic_number: 73,
    group: 5,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 5,
    gridY: 6,
  },
  {
    name: "Tungsten",
    symbol: "W",
    atomic_mass: 183.84,
    atomic_number: 74,
    group: 6,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 6,
    gridY: 6,
  },
  {
    name: "Rhenium",
    symbol: "Re",
    atomic_mass: 186.207,
    atomic_number: 75,
    group: 7,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 7,
    gridY: 6,
  },
  {
    name: "Osmium",
    symbol: "Os",
    atomic_mass: 190.2,
    atomic_number: 76,
    group: 8,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 8,
    gridY: 6,
  },
  {
    name: "Iridium",
    symbol: "Ir",
    atomic_mass: 192.22,
    atomic_number: 77,
    group: 9,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 9,
    gridY: 6,
  },
  {
    name: "Platinum",
    symbol: "Pt",
    atomic_mass: 195.08,
    atomic_number: 78,
    group: 10,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 10,
    gridY: 6,
  },
  {
    name: "Gold",
    symbol: "Au",
    atomic_mass: 196.96657,
    atomic_number: 79,
    group: 11,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 11,
    gridY: 6,
  },
  {
    name: "Mercury",
    symbol: "Hg",
    atomic_mass: 200.59,
    atomic_number: 80,
    group: 12,
    period: 6,
    category: ElementCategory.TransitionMetal,
    gridX: 12,
    gridY: 6,
  },
  {
    name: "Thallium",
    symbol: "Tl",
    atomic_mass: 204.383,
    atomic_number: 81,
    group: 13,
    period: 6,
    category: ElementCategory.PostTransitionMetal,
    gridX: 13,
    gridY: 6,
  },
  {
    name: "Lead",
    symbol: "Pb",
    atomic_mass: 207,
    atomic_number: 82,
    group: 14,
    period: 6,
    category: ElementCategory.PostTransitionMetal,
    gridX: 14,
    gridY: 6,
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    atomic_mass: 208.9804,
    atomic_number: 83,
    group: 15,
    period: 6,
    category: ElementCategory.PostTransitionMetal,
    gridX: 15,
    gridY: 6,
  },
  {
    name: "Polonium",
    symbol: "Po",
    atomic_mass: 208.98243,
    atomic_number: 84,
    group: 16,
    period: 6,
    category: ElementCategory.Metalloid,
    gridX: 16,
    gridY: 6,
  },
  {
    name: "Astatine",
    symbol: "At",
    atomic_mass: 209.98715,
    atomic_number: 85,
    group: 17,
    period: 6,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 6,
  },
  {
    name: "Radon",
    symbol: "Rn",
    atomic_mass: 222.01758,
    atomic_number: 86,
    group: 18,
    period: 6,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 6,
  },
  {
    name: "Francium",
    symbol: "Fr",
    atomic_mass: 223.01973,
    atomic_number: 87,
    group: 1,
    period: 7,
    category: ElementCategory.AlkaliMetal,
    gridX: 1,
    gridY: 7,
  },
  {
    name: "Radium",
    symbol: "Ra",
    atomic_mass: 226.02541,
    atomic_number: 88,
    group: 2,
    period: 7,
    category: ElementCategory.AlkalineEarthMetal,
    gridX: 2,
    gridY: 7,
  },
  {
    name: "Actinium",
    symbol: "Ac",
    atomic_mass: 227.02775,
    atomic_number: 89,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 4,
    gridY: 9,
  },
  {
    name: "Thorium",
    symbol: "Th",
    atomic_mass: 232.038,
    atomic_number: 90,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 5,
    gridY: 9,
  },
  {
    name: "Protactinium",
    symbol: "Pa",
    atomic_mass: 231.03588,
    atomic_number: 91,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 6,
    gridY: 9,
  },
  {
    name: "Uranium",
    symbol: "U",
    atomic_mass: 238.0289,
    atomic_number: 92,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 7,
    gridY: 9,
  },
  {
    name: "Neptunium",
    symbol: "Np",
    atomic_mass: 237.048172,
    atomic_number: 93,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 8,
    gridY: 9,
  },
  {
    name: "Plutonium",
    symbol: "Pu",
    atomic_mass: 244.0642,
    atomic_number: 94,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 9,
    gridY: 9,
  },
  {
    name: "Americium",
    symbol: "Am",
    atomic_mass: 243.06138,
    atomic_number: 95,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 10,
    gridY: 9,
  },
  {
    name: "Curium",
    symbol: "Cm",
    atomic_mass: 247.07035,
    atomic_number: 96,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 11,
    gridY: 9,
  },
  {
    name: "Berkelium",
    symbol: "Bk",
    atomic_mass: 247.07031,
    atomic_number: 97,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 12,
    gridY: 9,
  },
  {
    name: "Californium",
    symbol: "Cf",
    atomic_mass: 251.07959,
    atomic_number: 98,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 13,
    gridY: 9,
  },
  {
    name: "Einsteinium",
    symbol: "Es",
    atomic_mass: 252.083,
    atomic_number: 99,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 14,
    gridY: 9,
  },
  {
    name: "Fermium",
    symbol: "Fm",
    atomic_mass: 257.09511,
    atomic_number: 100,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 15,
    gridY: 9,
  },
  {
    name: "Mendelevium",
    symbol: "Md",
    atomic_mass: 258.09843,
    atomic_number: 101,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 16,
    gridY: 9,
  },
  {
    name: "Nobelium",
    symbol: "No",
    atomic_mass: 259.101,
    atomic_number: 102,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 17,
    gridY: 9,
  },
  {
    name: "Lawrencium",
    symbol: "Lr",
    atomic_mass: 266.12,
    atomic_number: 103,
    group: 3,
    period: 7,
    category: ElementCategory.Actinide,
    gridX: 18,
    gridY: 9,
  },
  {
    name: "Rutherfordium",
    symbol: "Rf",
    atomic_mass: 267.122,
    atomic_number: 104,
    group: 4,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 4,
    gridY: 7,
  },
  {
    name: "Dubnium",
    symbol: "Db",
    atomic_mass: 268.126,
    atomic_number: 105,
    group: 5,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 5,
    gridY: 7,
  },
  {
    name: "Seaborgium",
    symbol: "Sg",
    atomic_mass: 269.128,
    atomic_number: 106,
    group: 6,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 6,
    gridY: 7,
  },
  {
    name: "Bohrium",
    symbol: "Bh",
    atomic_mass: 270.133,
    atomic_number: 107,
    group: 7,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 7,
    gridY: 7,
  },
  {
    name: "Hassium",
    symbol: "Hs",
    atomic_mass: 269.1336,
    atomic_number: 108,
    group: 8,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 8,
    gridY: 7,
  },
  {
    name: "Meitnerium",
    symbol: "Mt",
    atomic_mass: 277.154,
    atomic_number: 109,
    group: 9,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 9,
    gridY: 7,
  },
  {
    name: "Darmstadtium",
    symbol: "Ds",
    atomic_mass: 282.166,
    atomic_number: 110,
    group: 10,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 10,
    gridY: 7,
  },
  {
    name: "Roentgenium",
    symbol: "Rg",
    atomic_mass: 282.169,
    atomic_number: 111,
    group: 11,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 11,
    gridY: 7,
  },
  {
    name: "Copernicium",
    symbol: "Cn",
    atomic_mass: 282.179,
    atomic_number: 112,
    group: 12,
    period: 7,
    category: ElementCategory.TransitionMetal,
    gridX: 12,
    gridY: 7,
  },
  {
    name: "Nihonium",
    symbol: "Nh",
    atomic_mass: 286.182,
    atomic_number: 113,
    group: 13,
    period: 7,
    category: ElementCategory.PostTransitionMetal,
    gridX: 13,
    gridY: 7,
  },
  {
    name: "Flerovium",
    symbol: "Fl",
    atomic_mass: 290.192,
    atomic_number: 114,
    group: 14,
    period: 7,
    category: ElementCategory.PostTransitionMetal,
    gridX: 14,
    gridY: 7,
  },
  {
    name: "Moscovium",
    symbol: "Mc",
    atomic_mass: 290.196,
    atomic_number: 115,
    group: 15,
    period: 7,
    category: ElementCategory.PostTransitionMetal,
    gridX: 15,
    gridY: 7,
  },
  {
    name: "Livermorium",
    symbol: "Lv",
    atomic_mass: 293.205,
    atomic_number: 116,
    group: 16,
    period: 7,
    category: ElementCategory.PostTransitionMetal,
    gridX: 16,
    gridY: 7,
  },
  {
    name: "Tennessine",
    symbol: "Ts",
    atomic_mass: 294.211,
    atomic_number: 117,
    group: 17,
    period: 7,
    category: ElementCategory.Halogen,
    gridX: 17,
    gridY: 7,
  },
  {
    name: "Oganesson",
    symbol: "Og",
    atomic_mass: 295.216,
    atomic_number: 118,
    group: 18,
    period: 7,
    category: ElementCategory.NobleGas,
    gridX: 18,
    gridY: 7,
  },
];