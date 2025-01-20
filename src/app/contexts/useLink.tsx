"use client";

import { createContext, useContext, useState } from "react";

interface UseLinkProps {
  initialLink?: string;
}

const LinkContext = createContext<{
  currentLink: string;
  setCurrentLink: (link: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}>({} as any);

const useLink = ({ initialLink }: UseLinkProps = {}) => {
  const [currentLink, setCurrentLink] = useState<string>(initialLink || "home");

  return { currentLink, setCurrentLink };
};

export const LinkProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentLink, setCurrentLink } = useLink();

  return (
    <LinkContext.Provider value={{ currentLink, setCurrentLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => {
  return useContext(LinkContext);
};

export default useLink;
