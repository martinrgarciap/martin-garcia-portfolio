"use client";
import { TypeAnimation } from "react-type-animation";

const typingAnimationDuration = 2000;

const TypingAnimation = ({ sequenceText }: { sequenceText: string[] }) => (
  <TypeAnimation
    sequence={sequenceText.flatMap((text) => [text, typingAnimationDuration])}
    wrapper="span"
    speed={70}
    style={{ display: "inline-block" }}
    repeat={Infinity}
  />
);

export default TypingAnimation;
