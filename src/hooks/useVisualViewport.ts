import { useEffect, useState } from "react";
import { debounce } from "../utils";

export interface UseVisualViewportProps {
  debounceMs?: number;
}

export function useVisualViewport({
  debounceMs = 100
}: UseVisualViewportProps = {}) {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setHeight(window.visualViewport?.height);

    const debouncedSetter = debounce(() => {
      setHeight(window.visualViewport?.height)
    }, debounceMs);
    function onResize() {
      debouncedSetter();
    }

    window.visualViewport?.addEventListener('resize', onResize);
    return () => {
      window.visualViewport?.removeEventListener('resize', onResize);
    }
  }, [debounceMs]);

  return {
    height
  };
}