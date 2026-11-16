import { useEffect, useState } from "react";

// True at phone/tablet widths, matching the 768px breakpoint the styles use.
export default function useIsMobile(query = "(max-width: 768px)") {
  const get = () => typeof window !== "undefined" && window.matchMedia(query).matches;
  const [isMobile, setIsMobile] = useState<boolean>(get);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
}
