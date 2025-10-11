import * as fs from "node:fs";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import type { Portfolio } from "~/types/portfolio";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "usehooks-ts";
import { useHover } from "@uidotdev/usehooks";

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
  parentId,
  subtechs,
  url,
  noMargin,
  isSmall,
}: {
  id: string;
  parentId?: string;
  subtechs?: string[];
  url?: string;
  noMargin?: boolean;
  isSmall?: boolean;
}) {
  // Check for light mode to use higher contrast icons
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  // Track hover state so that the subtech popup can properly toggle
  const [techRef, isTechHovered] = useHover();
  const [subtechRef, isSubtechHovered] = useHover();

  const getTech = useServerFn(getTechData);

  const { data } = useQuery({
    queryKey: ["tech"],
    queryFn: () => getTech(),
  });

  // Let's not render anything if parsing fails,
  // or the tech isn't actually configured.
  if (!data) return;

  // Attempt to find relevant config data
  let techData: Portfolio.Technology;
  if (parentId) {
    const parent = data[parentId];
    if (!parent.subtechs || !(id in parent.subtechs))
      throw new Error(`${id} is not a subtech of ${parent}`);
    techData = parent.subtechs[id];
  } else {
    if (!(id in data)) throw new Error(`${id} is not a valid technology`);
    techData = data[id];
  }

  const {
    name,
    logo,
    logo_light,
    url: techUrl,
    subtechs: dataSubtechs,
  } = techData;

  // Use separate icon sizes for main, and source/subtech
  const size = isSmall ? "h-6 w-6" : "h-8 w-8";

  // Disable margins for small icons (they're positioned differently)
  const margins = noMargin ? "" : "m-1 mt-2 mb-2";

  return (
    <div className={`
      relative
      ${margins}
      ${size}
    `} ref={techRef}>
      <a
        href={url ?? techUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
        className="inline-block h-full w-full"
      >
        <img
          src={isLightMode && !!logo_light ? logo_light : logo}
          alt={name}
          className="h-full w-full"
        />
      </a>
      {subtechs && subtechs.length > 0 && dataSubtechs ? (
        <div
          hidden={!isTechHovered && !isSubtechHovered}
          className="before:absolute before:top-8 before:h-2 before:w-8"
        >
          <div
            className={`
              before:absolute before:left-2 before:z-40 before:h-4 before:w-4
              before:rotate-45 before:bg-neutral-700
            `}
            ref={subtechRef}
          >
            <div
              className={`
                absolute top-[125%] left-[-125%] z-40 flex w-[350%] basis-auto
                flex-row flex-wrap justify-center gap-x-1 gap-y-1 rounded-md
                bg-neutral-700 p-1 shadow-xl
              `}
            >
              {subtechs.map((t, i) => (
                <Technology key={i} id={t} parentId={id} noMargin />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
