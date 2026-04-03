"use client";
import { TypeAnimation } from "react-type-animation";

const typingAnimationDuration = 2000;

const TypingAnimation = ({
  sequenceText,
  className = "",
}: {
  sequenceText: string[];
  className: string;
}) => (
  <span className={`inline-flex min-h-[1.2em] items-center ${className}`}>
    <TypeAnimation
      sequence={sequenceText.flatMap((text) => [text, typingAnimationDuration])}
      wrapper="span"
      speed={70}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  </span>
);

export default TypingAnimation;
