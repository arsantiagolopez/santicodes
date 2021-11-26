import { Dispatch, SetStateAction } from "react";

export interface Project {
  name: string;
  heading: string;
  description: string;
  previewImg: string;
  techImg: string;
}

export interface ContextState {
  isProjectsActive: boolean;
  setIsProjectsActive: Dispatch<SetStateAction<boolean>>;
  projects: Project[];
  activeProject: Project;
  setActiveProject: Dispatch<SetStateAction<Project>>;
}
