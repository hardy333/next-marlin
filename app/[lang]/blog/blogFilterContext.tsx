"use client";

import { createContext, useContext, useState } from "react";

type ContextType = {
  blogFilter: string;
  setBlogFilter: (setBlogFilter: string) => void;
};

export const BlogFilterContext = createContext<ContextType>({
  blogFilter: "All",
  setBlogFilter: () => {},
});

const BlogFilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blogFilter, setBlogFilter] = useState("All");

  return (
    <BlogFilterContext.Provider value={{ blogFilter, setBlogFilter }}>
      {children}
    </BlogFilterContext.Provider>
  );
};

export default BlogFilterContextProvider;

export const useBlogFilterContext = () => useContext(BlogFilterContext);
