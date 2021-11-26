import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Flex {...styles.wrapper}>
      <Flex {...styles.fixed}>Hi</Flex>
    </Flex>
  );
};

export { Footer };

// Styles

const styles: any = {
  wrapper: {
    zIndex: "-1",
    background: "rgba(254, 241, 96, 1)",
    width: "100%",
    height: "15vh",
  },
  fixed: {
    position: "fixed",
    bottom: "0",
    height: "15vh",
    width: "100%",
    align: "center",
    justify: "center",
  },
};
