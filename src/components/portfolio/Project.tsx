import type { Portfolio } from "~/types/portfolio";
import Technology from "./Technology";

export default function Project({
  id,
  name,
  thumb,
  cta,
  link,
  tech,
  source,
  children,
}: Portfolio.ProjectProps) {
  return (
    <div
      id={id}
      className={`
        relative m-1 flex max-h-[250px] w-2xl flex-row overflow-hidden
        rounded-lg bg-neutral-300 shadow-md/20
        dark:bg-neutral-800 dark:shadow-neutral-300
      `}
    >
      <div className="flex flex-col p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="h-full overflow-y-auto">{children}</div>
        {tech ? (
          <div className="flex flex-row justify-center">
            {tech.map((t, i) => (
              <Technology key={i} id={t} />
            ))}
          </div>
        ) : (
          <></>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-min self-center rounded-sm bg-cyan-800 p-2 text-center text-sm
            font-semibold whitespace-nowrap text-cyan-400
            dark:bg-cyan-400 dark:text-cyan-950
            link-invalid:cursor-default link-invalid:bg-neutral-700/50
            link-invalid:text-neutral-300/50
            link-valid:hover:bg-cyan-950 link-valid:hover:dark:bg-cyan-500
            link-valid:hover:dark:text-neutral-100
          `}
        >
          {cta}
        </a>
      </div>
      {thumb ? (
        <div className={`
          flex min-h-full min-w-fit flex-col justify-center p-0
          max-md:hidden
        `}>
          <img src={thumb} className="w-full" />
        </div>
      ) : (
        <></>
      )}
      {source ? (
        <div className="absolute top-2 right-2 h-6 w-6">
          <Technology id={source.host} url={source.url} isSource />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
