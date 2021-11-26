import { Flex, Icon } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { ProjectsContext } from "../../context/ProjectsContext";

interface Props {
  setArrowClicked: Dispatch<SetStateAction<string | null>>;
}

const Arrows: React.FC<Props> = ({ setArrowClicked }) => {
  const { projects, activeProject, isProjectsActive, setActiveProject } =
    useContext(ProjectsContext);

  const leftArrowActive = activeProject === projects[0] ? false : true;
  const rightArrowActive =
    projects.length && activeProject !== projects[projects.length - 1];

  const handleBack = (): void => {
    const current = projects.indexOf(activeProject);
    setActiveProject(projects[current - 1]);
    setArrowClicked("back");
  };
  const handleNext = (): void => {
    const current = projects.indexOf(activeProject);
    setActiveProject(projects[current + 1]);
    setArrowClicked("forward");
  };

  if (!isProjectsActive) {
    return null;
  }

  return (
    <Flex {...styles.wrapper}>
      {leftArrowActive && (
        <Icon
          as={IoChevronBackSharp}
          onClick={handleBack}
          {...styles.arrow}
          {...styles.back}
        />
      )}
      {rightArrowActive && (
        <Icon
          as={IoChevronForwardSharp}
          onClick={handleNext}
          {...styles.arrow}
          {...styles.forward}
        />
      )}
    </Flex>
  );
};

export { Arrows };

// Styles

const styles: any = {
  wrapper: {
    zIndex: 999,
    position: "absolute",
    top: 0,
    direction: "row",
    align: { base: "flex-start", md: "center" },
    justify: "space-between",
    height: "100%",
    width: "100%",
    marginLeft: { base: "0", md: "-2vw" },
    color: "white",
  },
  arrow: {
    position: "absolute",
    fontSize: { base: "6xl", md: "9xl" },
    cursor: "pointer",
    color: "rgba(0,0,0,0.8)",
    _hover: {
      transition: "transform 0.1s ease-in-out",
      transform: "scale(1.2)",
      color: "#191919",
    },
  },
  back: {
    left: 0,
  },
  forward: {
    right: 0,
  },
};
