import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Luke</b>. I'm a software engineer and producer. You can contact me on <a href="https://twitter.com/SHRED_10">Twitter</a>. </p>
        <p>
          This website is currently <b>under development</b> please come back soon!
        </p>
      </section>
    </Layout>
  )
}
