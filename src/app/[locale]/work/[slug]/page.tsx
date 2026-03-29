import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  Column,
  Heading,
  Text,
  SmartLink,
  Row,
  Icon,
  Line,
} from "@once-ui-system/core";
import { baseURL, renderContent } from "@/resources";
import { person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const allParams: { slug: string; locale: string }[] = [];
  for (const locale of routing.locales) {
    const posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
    for (const post of posts) {
      allParams.push({ slug: post.slug, locale });
    }
  }
  return allParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[]; locale: string }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const locale = routeParams.locale;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const t = await getTranslations({ locale });
  const { work } = renderContent(t);

  const posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) {
    const fallbackPosts = getPosts(["src", "app", "[locale]", "work", "projects", "en"]);
    post = fallbackPosts.find((post) => post.slug === slugPath);
  }

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

const getProjectIcon = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("uav") || lowerTitle.includes("aerial") || lowerTitle.includes("iha"))
    return "rocket";
  if (lowerTitle.includes("5g") || lowerTitle.includes("localization") || lowerTitle.includes("konumlandırma"))
    return "globe";
  if (lowerTitle.includes("turret") || lowerTitle.includes("defense") || lowerTitle.includes("taret"))
    return "grid";
  if (lowerTitle.includes("virtual") || lowerTitle.includes("clothing") || lowerTitle.includes("sanal"))
    return "person";
  if (lowerTitle.includes("health") || lowerTitle.includes("monitoring") || lowerTitle.includes("arıza"))
    return "document";
  if (lowerTitle.includes("deepfake") || lowerTitle.includes("cingöz"))
    return "grid";
  return "rocket";
};

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[]; locale: string }>;
}) {
  const routeParams = await params;
  const locale = routeParams.locale;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { work, about } = renderContent(t);

  let post = getPosts(["src", "app", "[locale]", "work", "projects", locale]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    post = getPosts(["src", "app", "[locale]", "work", "projects", "en"]).find(
      (post) => post.slug === slugPath,
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={locale === "tr" ? "/tr/work" : "/work"}>
          <Text variant="label-strong-m">{t("work.backToProjects")}</Text>
        </SmartLink>

        <Row padding="l" radius="full" background="brand-alpha-weak" marginTop="24">
          <Icon
            name={getProjectIcon(post.metadata.title)}
            size="xl"
            onBackground="brand-strong"
          />
        </Row>

        <Heading variant="display-strong-m" align="center" marginTop="16">
          {post.metadata.title}
        </Heading>

        <Text variant="body-default-s" onBackground="neutral-weak">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
      </Column>

      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          {t("work.relatedProjects")}
        </Heading>
        <Projects exclude={[post.slug]} range={[1, 2]} locale={locale} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
