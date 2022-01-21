import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { AboutSection } from '../components/main/AboutSection'
import { TopSection } from '../components/main/TopSection'
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Keita Shimizu</title>
      </Head>
      <Header />
      <TopSection />
      <AboutSection />
    </MainLayout>
  )
}
