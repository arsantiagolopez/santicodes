import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Navigation } from "../Navigation";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex {...styles.wrapper}>
      <Navigation />
      <Flex {...styles.content}>{children}</Flex>
      {/* <Footer /> */}
    </Flex>
  );
};

export { Layout };

// Styles

const styles: any = {
  wrapper: {
    direction: "column",
  },
  content: {
    direction: "column",
    background: "#191919",
    minHeight: "calc(100vh - 6em)",
  },
};
