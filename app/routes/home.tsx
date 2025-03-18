import type { Route } from "./+types/home";
import { Home as Welcome } from "../components/Home";

// This function sets the page's metadata - like the browser tab title and page description
export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Welcome to the home page" }];
}

export default function Home() {
  return <Welcome />;
}
