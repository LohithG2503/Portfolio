import CertificationsSection from "@/components/sections/certifications-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
