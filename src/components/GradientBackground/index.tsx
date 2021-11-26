import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gradient: string;
  opacity: number;
  wrapperStyles: object;
}

const GradientBackground: React.FC<Props> = ({
  children,
  gradient,
  opacity,
  wrapperStyles,
}) => {
  return (
    <Flex background={gradient} {...styles.wrapper} {...wrapperStyles}>
      <Flex
        opacity={opacity}
        background={gradient}
        {...wrapperStyles}
        {...styles.overlay}
      />
      {children}
    </Flex>
  );
};

export { GradientBackground };

// Styles

const styles: any = {
  wrapper: {
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: { base: "0", md: "-3vh" },
    left: "0",
    width: "100%",
    height: "100%",
  },
};
