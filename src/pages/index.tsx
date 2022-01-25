import Head from 'next/head'
import { Footer } from '../components/footer'
import Header from '../components/header'
import { SkillSection } from '../components/main/SkillSection'
import { ProfileSection } from '../components/main/ProfileSection'
import MainLayout from '../layouts'
import { WorksSection } from '../components/main/WorksSection'
import { ContactSection } from '../components/main/ContactSection'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Keita Shimizu</title>
      </Head>
      <Header />
      <ProfileSection />
      <SkillSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </MainLayout>
  )
}
