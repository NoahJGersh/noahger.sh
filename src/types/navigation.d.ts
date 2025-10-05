import { FileRoutesByTo } from "~/routeTree.gen";

export namespace Navigation {
  export interface Page {
    name: string;
    path?: keyof FileRoutesByTo;
  }
}
