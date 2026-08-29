import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyWorkWithMe } from "@/components/home/WhyWorkWithMe";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <Process />
      <CTA />
    </>
  );
}
