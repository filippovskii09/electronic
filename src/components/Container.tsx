import { cn } from "../utils/utils";
import { ChildrenType } from "../types/types";
import { FC } from "react";

const Container: FC<ChildrenType> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1366px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
