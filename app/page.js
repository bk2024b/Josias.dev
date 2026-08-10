import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AboutJourney } from "@/components/home/AboutJourney";
import { TechStack } from "@/components/home/TechStack";
import { GithubActivity } from "@/components/home/GithubActivity";
import { CurrentlyBuilding } from "@/components/home/CurrentlyBuilding";
import { DailyTools } from "@/components/home/DailyTools";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <AboutJourney />
      <TechStack />
      <GithubActivity />
      <CurrentlyBuilding />
      <DailyTools />
      <CTA />
    </>
  );
}
