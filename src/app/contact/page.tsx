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
  Meta,
} from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./contact.module.scss";

export default function Contact() {
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
      showToast("Please enter your name", "error");
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    if (!message.trim()) {
      showToast("Please enter your message", "error");
      return;
    }

    const mailtoLink = `mailto:${person.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\n---\nSent from gokaydervisoglu.github.io")}`;

    showToast("Redirecting to email client...", "success");

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
        <Heading variant="display-strong-l">Get In Touch</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Have a question or want to work together? Feel free to reach out!
        </Text>
      </Column>

      <Row fillWidth gap="xl" horizontal="center" className={styles.contactRow}>
        {/* Contact Info Cards */}
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
                <Text variant="label-strong-m">Email</Text>
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
                <Text variant="label-strong-m">Location</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Trabzon, Turkey
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
                <Text variant="label-strong-m">LinkedIn</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Connect with me
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
                <Text variant="label-strong-m">GitHub</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Check out my projects
                </Text>
              </Column>
            </Row>
          </Card>
        </Column>

        {/* Contact Form */}
        <Card
          className={styles.formCard}
          padding="xl"
          radius="l"
          border="neutral-alpha-weak"
        >
          <Column gap="l" fillHeight className={styles.formContent}>
            <Heading variant="heading-strong-l">Send Message</Heading>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Column gap="m" fillHeight>
                <Column gap="8">
                  <Text variant="label-default-s">Name</Text>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </Column>

                <Column gap="8">
                  <Text variant="label-default-s">Email</Text>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </Column>

                <Column gap="8">
                  <Text variant="label-default-s">Message</Text>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
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
                  Send Message
                </Button>
              </Column>
            </form>
          </Column>
        </Card>
      </Row>

      {/* Toast Notification */}
      {toast && (
        <div className={`${styles.toast} ${styles[toast.type]}`}>
          {toast.message}
        </div>
      )}
    </Column>
  );
}
