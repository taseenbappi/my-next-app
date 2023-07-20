import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>This is about navbar</nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
