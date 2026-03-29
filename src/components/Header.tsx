"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Fade, Flex, Line, Row, Text, ToggleButton } from "@once-ui-system/core";

import { routes, display } from "@/resources";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname() ?? "";
  const params = useParams();
  const t = useTranslations();

  // params.locale from [locale] segment; fall back to checking window.location
  const currentLocale = (params?.locale as string) || "en";

  // Derived: is page currently showing Turkish?
  const [clientLocale, setClientLocale] = useState(currentLocale);
  useEffect(() => {
    // Sync with actual URL locale on client (handles edge cases)
    const urlLocale = typeof window !== "undefined" && window.location.pathname.startsWith("/tr") ? "tr" : "en";
    setClientLocale(urlLocale);
  }, [pathname]);

  function handleLanguageChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(
        // pathname is already locale-stripped by next-intl's usePathname
        pathname || "/",
        { locale: nextLocale }
      );
    });
  }

  const navLabel = (key: string) => t(`nav.${key}`);

  // Adds locale prefix to hrefs so navigation preserves the current locale.
  // Default locale ("en") uses no prefix (localePrefix: "as-needed").
  const localePath = (path: string) =>
    clientLocale === "tr" ? `/tr${path}` : path;

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />

      {/* Mobile language switcher - fixed side card */}
      {routing.locales.length > 1 && (
        <button
          onClick={() => {
            const nextLocale = clientLocale === "en" ? "tr" : "en";
            handleLanguageChange(nextLocale);
          }}
          disabled={isPending}
          style={{
            opacity: isPending ? 0.6 : 1,
          }}
          className={styles.mobileLangButton}
        >
          <Text variant="label-strong-s">{clientLocale.toUpperCase()}</Text>
        </button>
      )}

      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        {/* Desktop language switcher - left side */}
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {routing.locales.length > 1 && (
            <Row
              s={{ hide: true }}
              background="page"
              border="neutral-alpha-weak"
              radius="m-4"
              shadow="l"
              padding="4"
              gap="2"
              horizontal="center"
            >
              {routing.locales.map((locale) => (
                <ToggleButton
                  key={locale}
                  selected={clientLocale === locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={isPending ? "pointer-events-none opacity-60" : ""}
                >
                  {locale.toUpperCase()}
                </ToggleButton>
              ))}
            </Row>
          )}
        </Row>

        {/* Navigation */}
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href={localePath("/")} selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={localePath("/about")}
                      label={navLabel("about")}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={localePath("/about")}
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={localePath("/work")}
                      label={navLabel("work")}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={localePath("/work")}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="book"
                      href={localePath("/blog")}
                      label={navLabel("blog")}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="book"
                      href={localePath("/blog")}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href={localePath("/gallery")}
                      label={navLabel("gallery")}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href={localePath("/gallery")}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="email"
                      href={localePath("/contact")}
                      label={navLabel("contact")}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="email"
                      href={localePath("/contact")}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>

        {/* Time display */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone="Europe/Istanbul" />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
