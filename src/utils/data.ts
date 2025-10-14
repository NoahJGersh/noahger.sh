// Get relevant server-side data from R2

import { env } from "cloudflare:workers";
import type { Navigation } from "~/types/navigation";
import type { Portfolio } from "~/types/portfolio";

// Generic internal utility for any given key in the data bucket
async function getData<T>(key: string): Promise<T | null> {
  const body = await env.STATIC_DATA.get(key);
  if (!body) return null;

  return await body.json();
}

export async function getPages(): Promise<Navigation.Page[]> {
  return (await getData<Navigation.Page[]>("pages.json")) ?? [];
}

export async function getTechnologies(): Promise<Portfolio.TechConfig> {
  return (await getData<Portfolio.TechConfig>("technologies.json")) ?? {};
}
