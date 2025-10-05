import * as fs from "node:fs";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import type { Navigation } from "~/types/navigation";
import { useQuery } from "@tanstack/react-query";

const getPageData = createServerFn({ method: "GET" }).handler(
  async (): Promise<Navigation.Page[]> => {
    const pageConfig = fs.readFileSync("src/data/pages.json");
    return JSON.parse(pageConfig.toString()) as Navigation.Page[];
  },
);

export default function NavBar() {
  // Get navigation links from server config
  const getPages = useServerFn(getPageData);
  const { data } = useQuery({
    queryKey: ["pages"],
    queryFn: () => getPages(),
  });

  // Get current path
  const matchRoute = useMatchRoute();

  return (
    <div
      className={`
        sticky top-0 flex w-screen flex-row items-end mask-b-from-white
        mask-b-from-75% mask-alpha p-4 backdrop-blur-lg
      `}
    >
      <h1 className="pr-8 text-3xl font-bold">NoahGer.sh</h1>
      {data?.map((page, i) =>
        page.path ? (
          <Link
            key={i}
            to={page.path}
            className={`
              mr-4 text-2xl
              ${matchRoute({ to: page.path }) ? `font-semibold text-cyan-500` : ""}
            `}
          >
            {page.name}
          </Link>
        ) : (
          <a key={i}>
            <p className="text-neutral-500">{page.name}</p>
            <p className="absolute top-4 text-xs text-amber-400">
              Coming soon!
            </p>
          </a>
        ),
      )}
    </div>
  );
}
