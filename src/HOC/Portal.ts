import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

export const Portal = ({children}: {children: React.ReactNode}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.getElementById("portals") as HTMLElement,
      )
    : null;
};
