console.log("<--- main.js loaded --->");

import { ExampleComponent } from "ExampleComponent.js";

const _truncateString = (text, length, useEllipses) => {
  if (text.length < length) return text;
  else {
    const trimmed = text.slice(0, length);
    const trimmedAtIndexOfLastWhitespace = trimmed.slice(
      0,
      Math.min(trimmed.length, trimmed.lastIndexOf(" "))
    );
    return useEllipses
      ? trimmedAtIndexOfLastWhitespace + "…"
      : trimmedAtIndexOfLastWhitespace;
  }
};
