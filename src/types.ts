export interface Project {
  projectTitle: string;
  projectLinks: {
    github: string;
    live?: string;
  };
  projectDescription: string;
  projectTechnology: string[];
}
