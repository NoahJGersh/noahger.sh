export namespace Portfolio {
  export type TechConfig = Record<string, Technology>;

  export interface Technology {
    name: string;
    logo: string;
    logo_light?: string; // Light mode logo for better contrast
    url: string;
    subtechs?: TechConfig;
  }

  interface ProjectSource {
    host: name; // Should be a Technology name
    url: string;
  }

  export interface ProjectProps {
    id: string;
    name: string;
    thumb?: string;
    cta: string;
    link?: string;
    tech?: string[];
    subtechs?: Record<string, string[]>;
    source?: ProjectSource;
    children: ReactNode | undefined;
  }
}
