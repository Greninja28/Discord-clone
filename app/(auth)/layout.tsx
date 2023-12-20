import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-indigo-400 h-full">{children}</div>;
};

export default Layout;
