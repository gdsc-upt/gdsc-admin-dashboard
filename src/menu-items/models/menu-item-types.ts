export const MenuItemTypes = {
  0: 'Internal link',
  1: 'External link',
} as const;

export type MenuItemType = keyof typeof MenuItemTypes;
export type MenuItemTypeVerbose = typeof MenuItemTypes[keyof typeof MenuItemTypes];
