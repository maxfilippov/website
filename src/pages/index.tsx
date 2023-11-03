import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

import styles from "./index.module.css";
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageSDKs from "../components/HomepageSDKs";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const LogoImg = require("@site/static/img/logo.png").default;
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={LogoImg} alt="Logo" className={styles.headerLogo} />
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
        </div>
        <p className={clsx("hero__subtitle", styles.heroSubTitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/docs/getting-started"
          >
            Install ReductStore in Seconds ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageTestimonials />
        <HomepageSDKs />
      </main>
    </Layout>
  );
}
