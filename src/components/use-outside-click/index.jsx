import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } else {
        handler(event);
      }
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
