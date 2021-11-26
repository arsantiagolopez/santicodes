import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ProjectsProvider } from "../context/ProjectsProvider";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ProjectsProvider>
        <Component {...pageProps} />
      </ProjectsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
