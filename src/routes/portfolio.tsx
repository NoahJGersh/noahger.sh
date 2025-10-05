import { createFileRoute } from "@tanstack/react-router";
import Project from "~/components/portfolio/Project";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={`
      mr-auto ml-auto flex flex-row flex-wrap justify-around gap-y-4 p-4 pt-2
    `}>
      <Project
        id="noahger-sh"
        name="This Webpage"
        cta="You are here!"
        tech={[
          "tanstack",
          "react",
          "vite",
          "nodejs",
          "typescript",
          "tailwindcss",
        ]}
      >
        I built this website using TanStack. Renovations are ongoing as I
        modernize and spruce things up.
      </Project>
      <Project
        id="blusterin-badlands"
        name="Blusterin' Badlands"
        cta="Play on Itch.io"
        link="https://kolastor.itch.io/blusterin-badlands"
        tech={["godot"]}
        thumb="/resources/images/blusterin-badlands-cover.png"
      >
        An arcade-style game where you dig up grapple points and try to hold on
        while a storm blows you around. I co-designed the gameplay, and fully
        implemented it in Godot, using GDScript. Made for Brackey&apos;s Game
        Jam 2024.
      </Project>
    </div>
  );
}
