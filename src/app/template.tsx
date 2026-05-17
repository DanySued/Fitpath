"use client";

import { motion } from "framer-motion";

let navCount = 0;

function getDuration() {
  if (navCount === 0) return 0.5;
  if (navCount === 1) return 0.4;
  return 0.3;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const duration = getDuration();
  navCount++;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
