import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <div className="flex justify-center w-screen">
      <div
        className="w-[1080px] grid grid-cols-3 gap-4" //
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
