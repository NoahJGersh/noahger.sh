import { Link, useMatchRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import type { Navigation } from "~/types/navigation";
import { useQuery } from "@tanstack/react-query";
import Technology from "../portfolio/Technology";
import * as Data from "~/utils/data";

const getPageData = createServerFn({ method: "GET" }).handler(
  async (): Promise<Navigation.Page[]> => {
    return Data.getPages();
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
        sticky top-0 z-50 flex w-full flex-row items-end p-4 pb-1
        backdrop-blur-md
      `}
    >
      <h1 className="mr-8 text-3xl font-bold">NoahGer.sh</h1>
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
          <a key={i} className="relative">
            <p className="text-neutral-500">{page.name}</p>
            <p className="absolute bottom-5 text-xs text-amber-400">
              Coming soon!
            </p>
          </a>
        ),
      )}
      <div className="ml-auto flex flex-row">
        <Technology
          id="linkedin"
          url="https://www.linkedin.com/in/NoahJGersh"
          isSmall
          forceIconColor
        />
        <Technology
          id="github"
          url="https://github.com/NoahJGersh"
          isSmall
          forceIconColor
        />
      </div>
    </div>
  );
}
