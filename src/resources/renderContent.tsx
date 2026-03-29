import { Text } from "@once-ui-system/core";
import { person, social, newsletter, home, about, blog, work, gallery, contact } from "./content";
import { i18n } from "./once-ui.config";

type TranslationFunction = (key: string) => string;

function renderContent(t: TranslationFunction) {
  if (!i18n) {
    return { person, social, newsletter, home, about, blog, work, gallery, contact };
  }

  const translatedPerson = {
    ...person,
    role: t("person.role"),
  };

  const translatedHome = {
    ...home,
    label: t("home.label"),
    title: t("home.title"),
    description: t("home.description"),
    headline: <>{t("home.headline")}</>,
    subline: (
      <>
        {t("home.sublinePre")}
        <Text as="span" size="xl" weight="strong">{t("home.sublineStrong")}</Text>
        {t("home.sublinePost")}
      </>
    ),
  };

  const translatedAbout = {
    ...about,
    label: t("about.label"),
    title: t("about.title"),
    description: t("about.description"),
    intro: {
      ...about.intro,
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      ...about.work,
      title: t("about.work.title"),
      experiences: [
        {
          company: t("about.work.experiences.turkcell.company"),
          timeframe: t("about.work.experiences.turkcell.timeframe"),
          role: t("about.work.experiences.turkcell.role"),
          location: t("about.work.experiences.turkcell.location"),
          achievements: [
            <>{t("about.work.experiences.turkcell.achievement1")}</>,
            <>{t("about.work.experiences.turkcell.achievement2")}</>,
          ],
          images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
        },
        {
          company: t("about.work.experiences.kafein.company"),
          timeframe: t("about.work.experiences.kafein.timeframe"),
          role: t("about.work.experiences.kafein.role"),
          location: t("about.work.experiences.kafein.location"),
          achievements: [
            <>{t("about.work.experiences.kafein.achievement1")}</>,
            <>{t("about.work.experiences.kafein.achievement2")}</>,
          ],
          images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
        },
      ],
    },
    studies: {
      ...about.studies,
      title: t("about.studies.title"),
      institutions: [
        {
          name: t("about.studies.institution"),
          description: <>{t("about.studies.degree")}</>,
          timeframe: t("about.studies.timeframe"),
        },
      ],
    },
    technical: {
      ...about.technical,
      title: t("about.technical.title"),
      skills: about.technical.skills.map((skill, index) => ({
        ...skill,
        title: index === 0 ? t("about.technical.mainSkills") : t("about.technical.toolsTitle"),
        description: (
          <>{index === 0 ? t("about.technical.mainSkillsDesc") : t("about.technical.toolsDesc")}</>
        ),
      })),
    },
  };

  const translatedWork = {
    ...work,
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description"),
  };

  const translatedBlog = {
    ...blog,
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description"),
  };

  const translatedGallery = {
    ...gallery,
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description"),
  };

  const translatedContact = {
    ...contact,
    label: t("contact.label"),
    title: t("contact.title"),
    description: t("contact.description"),
  };

  return {
    person: translatedPerson,
    social,
    newsletter,
    home: translatedHome,
    about: translatedAbout,
    blog: translatedBlog,
    work: translatedWork,
    gallery: translatedGallery,
    contact: translatedContact,
  };
}

export { renderContent };
