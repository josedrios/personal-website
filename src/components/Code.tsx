"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
// Prismjs theme
import "automad-prism-themes/dist/prism-automad-dark.css";
// Import all languages that will be used through this code snippet component
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-java";
// Import for line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Code({
  text,
  language,
}: {
  text: string;
  language: string;
}) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(normalized);
    setCopied(true);
    // wait 3 sec to turn it back
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [text, language]);

  // Got the the line below from AI, wasnt able to get multiline
  // strings and escaping (like \n) working inside MDX files because of
  // the specific mdx parser I am using for dynamic data, this line below
  // allows me to convert ;; into a line break
  const normalized = text.replace(/;;/g, "\n").trim();
  const lineCount = normalized.split("\n").length;

  return (
    <div className="code-block__container">
      <pre suppressHydrationWarning className="code-block">
        <code
          suppressHydrationWarning
          className={`language-${language} ${lineCount === 1 ? "no-line-numbers" : "line-numbers"}`}
        >
          {normalized}
        </code>
      </pre>
      <button onClick={() => handleCopy()} className="code-block__copy">
        {copied ? "COPIED" : "COPY"}
      </button>
      <p className="code-block__language">{language.toUpperCase()}</p>
    </div>
  );
}
