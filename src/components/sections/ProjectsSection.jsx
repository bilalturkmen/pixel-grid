import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import Section from "../layout/Section";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.type))];
  const displayedProjects = projects
    .filter((p) => filter === "All" || p.type === filter)
    .slice(0, 6);

  return (
    <Section id="projects" title="Featured Work" secondary>
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {displayedProjects.map((p, i) => (
          <ProjectCard key={p.id || i} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
