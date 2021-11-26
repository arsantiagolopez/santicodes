import { Context, createContext } from "react";
import { projects } from "../data";
import { ContextState } from "../types";

const ProjectsContext: Context<ContextState> = createContext<ContextState>({
  isProjectsActive: false,
  setIsProjectsActive: () => {},
  projects: projects,
  activeProject: projects[0],
  setActiveProject: () => {},
});

export { ProjectsContext };
