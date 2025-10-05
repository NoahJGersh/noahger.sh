export type TechnologyConfig = Record<string, Technology>;

export interface Technology {
  name: string;
  logo: string;
  logo_light?: string; // Light mode logo for better contrast
  url: string;
}

export interface ProjectProps {
  id: string;
  name: string;
  thumb?: string;
  cta: string;
  link?: string;
  tech?: string[];
  children: ReactNode | undefined;
}
