import React from "react";
import utilStyles from '../styles/utils.module.scss'
import Layout from "../components/layout";
import {NavigationCard} from "../components/NavigationCard";

export default function Home() {
  return (
    <Layout home>
      <main className={utilStyles.main}>
        <h1 className={utilStyles.title}>
          <a href="/">Yoshikouki.net</a>!!1
        </h1>

        <p className={utilStyles.description}>
          実験場
        </p>

        <div className={utilStyles.grid}>
          <NavigationCard
            href={"/blog"}
            title={"Blog"}
            description={"アウトプットまとめ"}
          />

          <NavigationCard
            href={"https://twitter.com/k2_yoshikouki"}
            title={"Twitter"}
            description={"日常系ツイート多め"}
          />

          <NavigationCard
            href={"/labo"}
            title={"Labo"}
            description={"開発中の色々"}
          />
        </div>
      </main>
    </Layout>
  )
}
