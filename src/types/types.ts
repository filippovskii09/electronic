import { ReactNode } from "react";

export type ChildrenType = ClassProps & {
  children: ReactNode;
};

export type ClassProps = {
  className?: string;
};
