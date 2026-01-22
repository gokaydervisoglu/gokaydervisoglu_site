"use client";

import {
  Card,
  Column,
  Heading,
  Icon,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  tags?: string[];
  date?: string;
}

const getProjectIcon = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("uav") || lowerTitle.includes("aerial")) return "rocket";
  if (lowerTitle.includes("5g") || lowerTitle.includes("localization")) return "globe";
  if (lowerTitle.includes("turret") || lowerTitle.includes("defense")) return "grid";
  if (lowerTitle.includes("virtual") || lowerTitle.includes("clothing")) return "person";
  if (lowerTitle.includes("health") || lowerTitle.includes("monitoring")) return "document";
  return "rocket";
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  description,
  tags = [],
  date,
}) => {
  return (
    <SmartLink href={href} className={styles.cardLink}>
      <Card
        className={styles.projectCard}
        padding="l"
        radius="l"
        border="neutral-alpha-weak"
      >
        <Column gap="m" fillWidth>
          <Row gap="m" vertical="center">
            <div className={styles.iconWrapper}>
              <Icon name={getProjectIcon(title)} size="l" onBackground="brand-strong" />
            </div>
            <Column gap="4" flex={1}>
              <Heading as="h3" variant="heading-strong-m">
                {title}
              </Heading>
              {date && (
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                </Text>
              )}
            </Column>
          </Row>
          
          <Text variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
          
          {tags.length > 0 && (
            <Row gap="8" wrap>
              {tags.slice(0, 3).map((tag, index) => (
                <Tag key={index} size="s" variant="neutral">
                  {tag}
                </Tag>
              ))}
            </Row>
          )}
        </Column>
      </Card>
    </SmartLink>
  );
};
