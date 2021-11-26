import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: string;
  gradient: string;
  opacity: number;
}

const GradientTitle: React.FC<Props> = ({ children, gradient, opacity }) => {
  return (
    <Flex {...styles.wrapper}>
      <Heading background={gradient} {...styles.heading} {...styles.title}>
        {children}
      </Heading>
      <Heading
        background={gradient}
        opacity={opacity}
        {...styles.heading}
        {...styles.title}
        {...styles.textOverlay}
      >
        {children}
      </Heading>
    </Flex>
  );
};

export { GradientTitle };

// Styles

const styles: any = {
  wrapper: {
    position: "relative",
  },
  heading: {
    fontFamily: "'Signika', sans-serif",
    fontWeight: "700",
    color: "white",
    letterSpacing: "tight",
    fontSize: { base: "3xl", md: "3.2vw" },
    lineHeight: "1em",
  },
  title: {
    backgroundClip: "text",
    width: "fit-content",
    paddingBottom: { base: "1em", md: "2vh" },
    transition: "opacity 10s",
  },
  textOverlay: {
    position: "absolute",
    top: "0",
  },
};
