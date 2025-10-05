import * as fs from "node:fs";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import type { TechnologyConfig } from "~/types/projects";
import { useQuery } from "@tanstack/react-query";

const getTechData = createServerFn({ method: "GET" }).handler(
  async (): Promise<TechnologyConfig> => {
    // Setting up a db for the tech metadata is overkill,
    // so simple JSON parsing will suffice.
    const techConfig = fs.readFileSync("src/data/technologies.json");
    return JSON.parse(techConfig.toString()) as TechnologyConfig;
  },
);

export default function Technology({ id }: { id: string }) {
  const getTech = useServerFn(getTechData);

  const { data } = useQuery({
    queryKey: ["tech"],
    queryFn: () => getTech(),
  });

  // Let's not render anything if parsing fails,
  // or the tech isn't actually configured.
  if (!data || !data[id]) return;

  const { name, logo, url } = data[id];

  return (
    <a href={url} className="m-1 mt-2 mb-2 h-8 w-8" title={name}>
      <img src={logo} alt={name} className="h-full w-full" />
    </a>
  );
}
