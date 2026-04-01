"use client";
import { useEffect, useState } from "react";

type HeaderProps = {
  type?: number;
  children: string;
};

export default function Header({ type = 1, children: text }: HeaderProps) {
  // For blinking terminal cursor animation (for H1 only)
  const [cursor, setCursor] = useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => {
        if (prev) {
          return false;
        } else {
          return true;
        }
      });
    }, 750);
    return () => clearInterval(interval);
  }, [cursor]);

  if (type === 1) {
    return (
      <h1>
        <span
          className={`header__prefix ${cursor ? "show-cursor" : "hide-cursor"}`}
        >
          &gt;
        </span>
        {text}
      </h1>
    );
  } else if (type === 2) {
    return (
      <h2>
        <span className="header__prefix">~</span>
        {text}
      </h2>
    );
  } else if (type === 3) {
    return (
      <h3>
        <span className="header__prefix">~</span>
        {text}
      </h3>
    );
  } else {
    return;
  }
}
