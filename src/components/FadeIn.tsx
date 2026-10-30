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
  const Component = main ? motion.main : motion.footer;

  return (
    <Component
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </Component>
  );
}
