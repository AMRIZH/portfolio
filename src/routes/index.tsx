import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/portfolio/Portfolio";
import portfolioData from "../data/data.json";
import type { PortfolioData } from "../types/portfolio";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <Portfolio data={portfolioData as PortfolioData} />;
}
