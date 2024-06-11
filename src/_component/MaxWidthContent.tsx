import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthContent = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto py-2 px-2", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContent;
