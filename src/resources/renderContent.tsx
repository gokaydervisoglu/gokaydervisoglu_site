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
        <Text as="span" size="xl" weight="strong">
          {t("home.sublineStrong")}
        </Text>
        {t("home.sublinePost")}
      </>
    ),
  };

  const achievementKeys = ["teknofest", "tubitak", "sayzek", "idef"];
  const translatedAchievements = about.achievements && {
    ...about.achievements,
    title: t("about.achievements.title"),
    items: about.achievements.items.map((item, index) => {
      const key = achievementKeys[index] ?? `${index}`;
      return {
        ...item,
        title: t(`about.achievements.items.${key}.title`),
        description: t(`about.achievements.items.${key}.description`),
      };
    }),
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
            <>{t("about.work.experiences.turkcell.achievement3")}</>,
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
            <>{t("about.work.experiences.kafein.achievement3")}</>,
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
    achievements: translatedAchievements,
    technical: {
      ...about.technical,
      title: t("about.technical.title"),
      skills: about.technical.skills.map((skill, index) => {
        const groupKeys = ["programming", "tools", "testAutomation", "artificialIntelligence"];
        const key = groupKeys[index] ?? `skill${index}`;
        return {
          ...skill,
          title: t(`about.technical.${key}.title`),
          description: <>{t(`about.technical.${key}.description`)}</>,
        };
      }),
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
