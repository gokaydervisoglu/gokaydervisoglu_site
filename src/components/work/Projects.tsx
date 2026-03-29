import { getPosts } from "@/utils/utils";
import { Row } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: string;
}

export function Projects({ range, exclude, locale = "en" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "[locale]", "work", "projects", locale]);

  if (allProjects.length === 0 && locale !== "en") {
    allProjects = getPosts(["src", "app", "[locale]", "work", "projects", "en"]);
  }

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Row fillWidth gap="l" wrap paddingX="l">
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
          href={`/work/${post.slug}`}
          title={post.metadata.title}
          description={post.metadata.summary}
          tags={post.metadata.tags || []}
          date={post.metadata.publishedAt}
        />
      ))}
    </Row>
  );
}
