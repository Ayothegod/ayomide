import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = ["Postman Collections", "Jupyter Notebooks", "OpenAPI Specs", "Docker Compose files", "GitHub Actions", "SDK snippets"];

export default function Ticker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex h-6 items-center justify-center gap-2 font-mono text-xs text-zinc-500" aria-live="off">
      <span>Validates</span>
      <div className="relative h-5 w-40 overflow-hidden text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            className="absolute inset-0 whitespace-nowrap text-zinc-200"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {items[i]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
