import { createFileRoute } from "@tanstack/react-router";
import Project from "~/components/portfolio/Project";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className={`
        mr-auto ml-auto flex flex-row flex-wrap justify-around gap-y-4 p-4 pt-2
      `}
    >
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
          "go",
          "postgres",
        ]}
        source={{
          host: "github",
          url: "https://github.com/NoahJGersh/noahger.sh",
        }}
      >
        I built this website using TanStack. The upcoming Vastest Sea section is
        in further development, powered by a Go API and backed by a PostgreSQL
        database. Renovations are ongoing as I modernize and spruce things up.
      </Project>
      <Project
        id="watchsports"
        name="WatchSports (SportsBubble)"
        cta="View Online"
        link="https://www.watchsports.app/"
        tech={[
          "aws",
          "nextjs",
          "react",
          "nodejs",
          "apollo",
          "neo4j",
          "typescript",
          "serverless",
          "terraform",
        ]}
        subtechs={{
          aws: [
            "acm",
            "amplify",
            "apigateway",
            "cloudformation",
            "cloudfront",
            "cloudtrail",
            "cloudwatch",
            "cognito",
            "dynamodb",
            "eventbridge",
            "iam",
            "iamidentitycenter",
            "lambda",
            "managementconsole",
            "route53",
            "s3",
            "sqs",
          ],
        }}
      >
        Full-stack development for SportsBubble&apos;s WatchSports app. Backend
        work includes implementation, deployment, testing, and management of
        serverless functions on AWS; numerous individual API, parser, and web
        scraper integrations; and database management. Frontend work includes
        development of a partner-facing B2B data management tool using Next.js.
      </Project>
      <Project
        id="metalworks"
        name="Cosmere RPG Implementation for FoundryVTT"
        cta="Speak the Words"
        link="https://www.foundryvtt.store/search?q=cosmere%20rpg"
        tech={["foundryvtt", "typescript"]}
        source={{
          host: "github",
          url: "https://github.com/the-metalworks/cosmere-rpg",
        }}
      >
        I am an open source contributor to the design, implementation, and
        testing of the official system for the Cosmere RPG on Foundry Virtual
        Tabletop. I have also undergone data entry tasks for the premium content
        modules, which adapt the rulebooks into a digital environment.
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
