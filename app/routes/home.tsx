import { Welcome } from "@components/Welcome";
import type { Route } from "./+types/home";
// This function sets the page's metadata - like the browser tab title and page description
export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Welcome to the home page" }];
}

export default function Home(props: Route.ComponentProps) {
  const { loaderData, actionData, params, matches } = props;
  console.log("loaderData", loaderData);
  /**
   * loaderData: Only called on the server when server rendering or at the build time with pre-rendering.
   * actionData:
   */
  return <Welcome />;
}

export async function loader() {
  return {
    message: "Text from the server loader",
  };
}

export async function clientLoader() {
  return {
    message: "Text from the client loader",
  };
}
