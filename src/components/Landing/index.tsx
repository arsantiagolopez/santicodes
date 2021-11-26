import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import { getRandomGradient } from "../../utils/getRandomGradient";
import { Arrows } from "../Arrows";
import { GradientBackground } from "../GradientBackground";
import { GradientTitle } from "../GradientTitle";

interface Props {}

const Landing: React.FC<Props> = () => {
  const [opacity, setOpacity] = useState<number>(0);
  const [gradient, _] = useState<string>(getRandomGradient());
  const [arrowClicked, setArrowClicked] = useState<string | null>(null);

  const { projects, activeProject, isProjectsActive } =
    useContext(ProjectsContext);
  const { name, heading, description, previewImg, techImg } = activeProject;

  const title = activeProject === projects[0] ? "What We're Building" : name;

  const isCurrentProject = activeProject === projects[0];

  // Change gradient every 10 seconds
  useEffect(() => {
    let value = 1;
    const interval = setInterval(() => {
      setOpacity(value ? 0 : 1);
      value = value ? 0 : 1;
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Start effect right away
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  // Animate project transitions
  useEffect(() => {
    const timeout = setTimeout(() => {
      setArrowClicked(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [arrowClicked, activeProject]);

  // Animate navigation past projects click
  useEffect(() => {
    if (isProjectsActive) {
      setArrowClicked("forward");
    }
  }, [isProjectsActive]);

  const gradientTitleProps = { gradient, opacity };
  const gradientBackgroundProps = {
    gradient,
    opacity,
    wrapperStyles: { ...styles.section, ...styles.right },
  };
  const arrowsProps = { setArrowClicked };

  return (
    <Flex {...styles.wrapper}>
      <Flex
        animation={arrowClicked && "fadeIn 0.4s ease-in-out"}
        {...styles.section}
        {...styles.left}
      >
        <GradientTitle {...gradientTitleProps}>{title}</GradientTitle>
        <Heading {...styles.heading}>{heading}</Heading>
        <Text {...styles.description}>{description}</Text>
      </Flex>
      <GradientBackground {...gradientBackgroundProps}>
        <Flex
          animation={
            arrowClicked === "back"
              ? "slideRight 0.4s ease-in-out"
              : arrowClicked === "forward"
              ? "slideLeft 0.4s ease-in-out"
              : null
          }
          {...styles.gallery}
        >
          <Flex
            backgroundImage={previewImg}
            {...styles.preview}
            {...styles.image}
          />
          <Flex backgroundImage={techImg} {...styles.tech} {...styles.image} />
        </Flex>
        <Arrows {...arrowsProps} />
      </GradientBackground>
    </Flex>
  );
};

export { Landing };

// Styles

const styles: any = {
  wrapper: {
    direction: { base: "column", md: "row" },
  },
  section: {
    marginY: { base: "0", md: "3vh" },
    minHeight: {
      base: "80vh",
      md: "calc(100vh - 6em - 3vh - 3vh - 5vh)",
    },
  },
  left: {
    direction: "column",
    width: { base: "100%", md: "50%" },
    paddingX: { base: "1em", md: "2vw" },
    paddingRight: { base: "1em", md: "5vw" },
    justify: "center",
  },
  heading: {
    fontFamily: "'Signika', sans-serif",
    fontWeight: "700",
    color: "white",
    letterSpacing: "tight",
    fontSize: { base: "3xl", md: "3.2vw" },
    lineHeight: "1em",
  },
  description: {
    color: "white",
    fontSize: { base: "12pt", md: "max(11pt, 1.1vw)" },
    paddingY: { base: "1em", md: "2vh" },
  },
  right: {
    direction: { base: "column", md: "row" },
    align: "center",
    justify: "flex-start",
    width: { base: "100%", md: "50%" },
    paddingX: { base: "1em", md: "2vw" },
    borderLeftRadius: { base: "0", md: "1.5em" },
    height: { base: "fit-content", md: "auto" },
    transition: "opacity 10s",
  },
  gallery: {
    direction: { base: "column", md: "row" },
    width: "100%",
    height: "100%",
    align: "center",
  },
  image: {
    zIndex: 1,
    borderRadius: "1em",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: { base: "70vh", md: "60vh" },
  },
  preview: {
    height: { base: "100%", md: "90%" },
    width: { base: "100%", md: "25vw" },
    marginY: { base: "2em", md: "0" },
  },
  tech: {
    height: { base: "90%", md: "80%" },
    marginLeft: "2vw",
    width: { base: "90%", md: "15vw" },
    marginBottom: { base: "4em", md: "0" },
  },
};
