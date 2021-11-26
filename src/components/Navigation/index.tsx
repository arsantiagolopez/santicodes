import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";

interface Props {}

interface Link {
  name: string;
  to: string | (() => void) | undefined;
  isExternal: boolean;
}

const Navigation: React.FC<Props> = () => {
  const {
    projects,
    isProjectsActive,
    setIsProjectsActive,
    activeProject,
    setActiveProject,
  } = useContext(ProjectsContext);

  const links: Link[] = [
    {
      name: "Past projects",
      to: () => setIsProjectsActive(!isProjectsActive),
      isExternal: false,
    },
    {
      name: "Portfolio",
      to: process.env.PORTFOLIO_URL,
      isExternal: true,
    },
  ];

  const handleLogoClick = () => redirectToLink(process.env.TWITCH_URL);

  const redirectToLink = (to: string | undefined): Window | null =>
    window.open(to, "_blank", "noopener,noreferrer");

  const toggleProjects = (): void => {
    const isCurrentProject = activeProject === projects[0];
    if (isCurrentProject && !isProjectsActive && projects.length > 1) {
      setActiveProject(projects[1]);
      setIsProjectsActive(true);
    }
  };

  // Redirect to link or toggle
  const handleClick = (to: Link["to"]): Window | null | void => {
    if (typeof to === "string") return redirectToLink(to);
    else return toggleProjects();
  };

  return (
    <Flex {...styles.wrapper}>
      <Box onClick={handleLogoClick} {...styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Santi Codes"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </Box>

      <Flex {...styles.links}>
        {links.map(({ name, to, isExternal }) => (
          <Button key={to} onClick={() => handleClick(to)} {...styles.link}>
            {name}
            {isExternal && <ExternalLinkIcon {...styles.external} />}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export { Navigation };

// Styles

const styles: any = {
  wrapper: {
    direction: "row",
    align: "center",
    justify: "space-between",
    width: "100%",
    height: { base: "4em", md: "6em" },
    background: "rgba(0,0,0,0.9)",
    paddingX: { base: "1em", md: "2vw" },
  },
  logo: {
    position: "relative",
    width: "7em",
    height: "2em",
    cursor: "pointer",
  },
  links: {
    direction: "row",
  },
  link: {
    variant: "link",
    color: "white",
    fontSize: { base: "md", md: "lg" },
    marginRight: { base: "0.5em", md: "1em" },
    fontWeight: "normal",
  },
  external: {
    display: { base: "none", md: "block" },
    fontSize: "8pt",
    marginTop: 2,
    marginLeft: 2,
  },
};
