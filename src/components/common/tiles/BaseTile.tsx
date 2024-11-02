import { ReactNode } from "react";

interface IBaseTile {
  children: ReactNode;
  className?: string;
  testId?: string;
}

function BaseTile({ children, className = "", testId }: IBaseTile) {
  return (
    <div
      test-id={testId}
      className={`border border-[#4b595e] rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default BaseTile;
