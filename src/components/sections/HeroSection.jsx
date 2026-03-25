import { ArrowRight } from "lucide-react";
import Section from "../layout/Section";

export default function HeroSection() {
  return (
    <Section id="hero" title="Building digital experiences that matter.">
      <p>
        I'm a developer specializing in high-performance web applications with
        modern tech stacks.
      </p>
      <a
        href="#projects"
        className="btn-cv"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
      >
        View My Work <ArrowRight size={18} />
      </a>
    </Section>
  );
}
