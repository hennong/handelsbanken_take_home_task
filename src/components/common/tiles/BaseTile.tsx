import { ReactNode } from "react";

interface IBaseTile {
  children: ReactNode;
  className?: string;
  testId?: string;
  onClick?: () => void;
  tabIndex?: number;
}

function BaseTile({
  children,
  className = "",
  testId,
  onClick,
  tabIndex,
}: IBaseTile) {
  return (
    <div
      test-id={testId}
      className={`border border-[#4b595e] rounded-lg p-2 ${className}`}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.code === "Enter" && onClick) {
          onClick();
        }
      }}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
}

export default BaseTile;
