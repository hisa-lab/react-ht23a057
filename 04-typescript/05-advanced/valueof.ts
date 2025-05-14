{
    const permissions = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
  } as const;
}  

//   type ValueOf<T> = T[keyof T];
//   type PermNum = ValueOf<typeof permissions>;   // 1 | 2 | 4

const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
type Species = typeof species[number]; // 'rabbit' | 'bear' | 'fox' | 'dog'