import React from "react";

export type ValuesOf<T> = T[keyof T];
export type List<T = string> = readonly T[];
export type VoidFn = () => void;

export interface DefaultProps {
  readonly children: React.ReactNode;
}
