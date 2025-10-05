import * as fs from "node:fs";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import type { Portfolio } from "~/types/portfolio";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "usehooks-ts";

const getTechData = createServerFn({ method: "GET" }).handler(
  async (): Promise<Portfolio.TechConfig> => {
    // Setting up a db for the tech metadata is overkill,
    // so simple JSON parsing will suffice.
    const techConfig = fs.readFileSync("src/data/technologies.json");
    return JSON.parse(techConfig.toString()) as Portfolio.TechConfig;
  },
);

export default function Technology({
  id,
  url,
  isSource,
}: {
  id: string;
  url?: string;
  isSource?: boolean;
}) {
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const getTech = useServerFn(getTechData);

  const { data } = useQuery({
    queryKey: ["tech"],
    queryFn: () => getTech(),
  });

  // Let's not render anything if parsing fails,
  // or the tech isn't actually configured.
  if (!data || !data[id]) return;

  const { name, logo, logo_light, url: techUrl } = data[id];

  // Set separate (smaller) size for source code links
  const size = isSource ? 4 : 8;

  // Disable margins for source code links (absolute position)
  const margins = isSource ? "" : "m-1 mt-2 mb-2";

  return (
    <a
      href={url ?? techUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${margins}
        h-${size}
        w-${size}
      `}
      title={name}
    >
      <img
        src={isLightMode && !!logo_light ? logo_light : logo}
        alt={name}
        className="h-full w-full"
      />
    </a>
  );
}
