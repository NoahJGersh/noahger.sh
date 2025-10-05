import * as fs from "node:fs";
import { Link } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { Navigation } from "~/types/navigation";
import { useQuery } from "@tanstack/react-query";

const getPageData = createServerFn({ method: "GET" }).handler(
  async (): Promise<Navigation.Page[]> => {
    const pageConfig = fs.readFileSync("src/data/pages.json");
    return JSON.parse(pageConfig.toString()) as Navigation.Page[];
  },
);

export default function NavBar() {
  const getPages = useServerFn(getPageData);

  const { data } = useQuery({
    queryKey: ["pages"],
    queryFn: () => getPages(),
  });

  return (
    <div className="static w-full">
      <Link to={"/"}>
        <h1>NoahGer.sh</h1>
      </Link>
      <div>
        {data?.map((page, i) =>
          page.path ? (
            <Link key={i} to={page.path}>
              {page.name}
            </Link>
          ) : (
            <a key={i}>{page.name}</a>
          ),
        )}
      </div>
    </div>
  );
}
