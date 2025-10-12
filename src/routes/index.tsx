import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="p-2 text-3xl font-bold">Noah Ger.sh</h1>
      <p className="p-2">
        <strong>Contact:</strong> me@noahger.sh
      </p>
      <p className="p-2">
        <a
          href="https://www.linkedin.com/in/noahjgersh"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-semibold text-cyan-700
            hover:text-cyan-400
          `}
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://github.com/NoahJGersh"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-semibold text-cyan-700
            hover:text-cyan-400
          `}
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://gitlab.com/NoahJGersh"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-semibold text-cyan-700
            hover:text-cyan-400
          `}
        >
          GitLab
        </a>
      </p>
      <p className="p-2">
        Need a full-stack app? Find me on{" "}
        <a
          href="https://www.fiverr.com/s/Egx7lm8"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-semibold text-cyan-700
            hover:text-cyan-400
          `}
        >
          Fiverr
        </a>
        !
      </p>
      <h2 className="pt-6 text-2xl font-bold">Current Projects:</h2>
      <p className="p-2">
        <a
          href="https://github.com/the-metalworks/cosmere-rpg"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-semibold text-cyan-700
            hover:text-cyan-400
          `}
        >
          Cosmere RPG for Foundry VTT
        </a>
      </p>
    </div>
  );
}
