"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
  children,
  main = false,
}: {
  children: ReactNode;
  main?: boolean;
}) {
  if (main) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.85,
          ease: "easeIn",
        }}
      >
        {children}
      </motion.main>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    );
  }
}
