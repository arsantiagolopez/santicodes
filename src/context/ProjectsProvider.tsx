import { ReactNode, useState } from "react";
import { projects } from "../data";
import { ContextState, Project } from "../types";
import { ProjectsContext } from "./ProjectsContext";

interface Props {
  children: ReactNode;
}

const ProjectsProvider = ({ children }: Props) => {
  const [isProjectsActive, setIsProjectsActive] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const context: ContextState = {
    isProjectsActive,
    setIsProjectsActive,
    projects,
    activeProject,
    setActiveProject,
  };

  return (
    <ProjectsContext.Provider value={context}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };
