import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/outline";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-green-800 shadow-lg transition-all hover:scale-110"
    >
      <ArrowUpIcon className="w-6 h-6 text-white" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
