"use client";

import { useEffect } from "react";
import { useLinkContext } from "../contexts/useLink";

/**
 * Syncs the active navigation link in the header for the current page.
 * Renders nothing — lets a Server Component page set the nav highlight
 * without becoming a Client Component itself.
 */
const SetActiveLink = ({ link }: { link: string }) => {
  const { setCurrentLink } = useLinkContext();

  useEffect(() => {
    setCurrentLink(link);
  }, [link, setCurrentLink]);

  return null;
};

export default SetActiveLink;
