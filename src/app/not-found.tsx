import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <FadeIn main>
      <h1>Not Found</h1>
      <p>The page you are looking for is hiding from you...</p>
    </FadeIn>
  );
}
