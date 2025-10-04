export type TechnologyConfig = Record<string, Technology>;

export interface Technology {
  name: string;
  logo: string;
  url: string;
}

export interface ProjectProps {
  slug: string;
  name: string;
  thumb?: string;
  cta: string;
  link?: string;
  tech?: string[];
  children: ReactNode | undefined;
}
