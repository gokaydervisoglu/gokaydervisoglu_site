"use client";

import { useState } from "react";
import {
  Column,
  Heading,
  Icon,
  Text,
  Row,
  Card,
  Button,
  Input,
  Textarea,
} from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "@/app/[locale]/contact/contact.module.scss";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim()) {
      showToast(t("errorName"), "error");
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      showToast(t("errorEmail"), "error");
      return;
    }

    if (!message.trim()) {
      showToast(t("errorMessage"), "error");
      return;
    }

    const mailtoLink = `mailto:${person.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\n---\nSent from gokaydervisoglu.github.io")}`;

    showToast(t("successRedirect"), "success");

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const linkedinLink = social.find((s) => s.name === "LinkedIn")?.link || "";
  const githubLink = social.find((s) => s.name === "GitHub")?.link || "";

  return (
    <Column maxWidth="l" fillWidth gap="xl" horizontal="center" paddingY="xl">
      <Column maxWidth="s" horizontal="center" align="center" gap="m">
        <Heading variant="display-strong-l">{t("heading")}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {t("subtitle")}
        </Text>
      </Column>

      <Row fillWidth gap="xl" horizontal="center" className={styles.contactRow}>
        <Column gap="m" className={styles.contactColumn}>
          <Card
            className={styles.contactCard}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
          >
            <Row gap="m" vertical="center">
              <div className={styles.iconWrapper}>
                <Icon name="email" size="l" onBackground="brand-strong" />
              </div>
              <Column gap="4">
                <Text variant="label-strong-m">{t("email")}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {person.email}
                </Text>
              </Column>
            </Row>
          </Card>

          <Card
            className={styles.contactCard}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
          >
            <Row gap="m" vertical="center">
              <div className={styles.iconWrapper}>
                <Icon name="globe" size="l" onBackground="brand-strong" />
              </div>
              <Column gap="4">
                <Text variant="label-strong-m">{t("location")}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t("locationValue")}
                </Text>
              </Column>
            </Row>
          </Card>

          <Card
            className={styles.contactCard}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            href={linkedinLink}
          >
            <Row gap="m" vertical="center">
              <div className={styles.iconWrapper}>
                <Icon name="linkedin" size="l" onBackground="brand-strong" />
              </div>
              <Column gap="4">
                <Text variant="label-strong-m">{t("linkedin")}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t("linkedinDesc")}
                </Text>
              </Column>
            </Row>
          </Card>

          <Card
            className={styles.contactCard}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            href={githubLink}
          >
            <Row gap="m" vertical="center">
              <div className={styles.iconWrapper}>
                <Icon name="github" size="l" onBackground="brand-strong" />
              </div>
              <Column gap="4">
                <Text variant="label-strong-m">{t("github")}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t("githubDesc")}
                </Text>
              </Column>
            </Row>
          </Card>
        </Column>

        <Card
          className={styles.formCard}
          padding="xl"
          radius="l"
          border="neutral-alpha-weak"
        >
          <Column gap="l" fillHeight className={styles.formContent}>
            <Heading variant="heading-strong-l">{t("sendMessage")}</Heading>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Column gap="m" fillHeight>
                <Column gap="8">
                  <Text variant="label-default-s">{t("nameLabel")}</Text>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("namePlaceholder")}
                  />
                </Column>

                <Column gap="8">
                  <Text variant="label-default-s">{t("emailLabel")}</Text>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                  />
                </Column>

                <Column gap="8">
                  <Text variant="label-default-s">{t("messageLabel")}</Text>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                  />
                </Column>

                <Button
                  type="submit"
                  variant="primary"
                  size="l"
                  fillWidth
                  suffixIcon="arrowRight"
                >
                  {t("sendButton")}
                </Button>
              </Column>
            </form>
          </Column>
        </Card>
      </Row>

      {toast && (
        <div className={`${styles.toast} ${styles[toast.type]}`}>{toast.message}</div>
      )}
    </Column>
  );
}
