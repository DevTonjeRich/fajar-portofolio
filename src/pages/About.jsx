import { ArrowUpRight, FileText } from 'lucide-react'

import profileImage from '../assets/images/profile.jpg'
import aboutHeroBg from '../assets/images/bg-aboutme.webp'
import ctaBg from '../assets/images/cta-bg.webp'
import profile from '../data/profile'
import PageContainer from '../components/layout/PageContainer'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import {
  SiKotlin,
  SiAndroid,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiGit,
} from 'react-icons/si'

// Stack teknologi utama
const techStack = [
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

// Data keahlian yang dikelompokkan ke dalam kategori
const skills = [
  {
    title: 'Administrasi & Data',
    items: [
      'Microsoft Office',
      'Microsoft Excel',
      'Google Workspace',
      'Google Spreadsheet',
      'Data Entry & Processing',
      'Dokumentasi & Pelaporan',
    ],
  },
  {
    title: 'Teknologi & Development',
    items: [
      'Mobile Development',
      'Web Development',
      'Kotlin',
      'Android Studio',
      'HTML, CSS & JavaScript',
      'Firebase',
    ],
  },
  {
    title: 'UI/UX & Digital',
    items: [
      'UI/UX Design',
      'Figma',
      'Machine Learning',
      'Digital Systems',
    ],
  },
  {
    title: 'Professional Skills',
    items: [
      'Komunikasi',
      'Koordinasi',
      'Problem Solving',
      'Ketelitian',
      'Time Management',
      'Teamwork',
    ],
  },
]

// Ganti dengan angka asli atau pencapaian Anda
const stats = [
  { value: '4+', label: 'Years of Tech Journey' },
  { value: '3+', label: 'Projects Done' },
  { value: '100%', label: 'Commitment' },
  { value: '9+', label: 'Core Tech Stack' },
]

function About() {
  return (
    <>
      {/* Page header / breadcrumb */}
      <Section className="relative overflow-hidden">
        <img
          src={aboutHeroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <PageContainer className="relative py-20 text-center sm:py-28">
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            About <span className='text-blue-600'>Me</span>
          </h1>
          <p className="mt-3 text-sm text-secondary">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-blue-600">About Me</span>
          </p>
        </PageContainer>
      </Section>

      {/* Intro */}
      <Section className="pt-16 sm:pt-24">
        <PageContainer>
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">

            {/* Photo */}
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={profileImage}
                alt={profile.fullName}
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div>
              <Badge variant="accent">
                Tentang Saya
              </Badge>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Tech & Data Enthusiast
              </h2>

              <div className="mt-6 max-w-xl space-y-5 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                <p>{profile.introduction}</p>
                <p>{profile.description}</p>
              </div>

              <Button
                href="/documents/cv_mohammad_rahmi_fajar.pdf"
                variant="secondary"
                className="mt-8 border !border-blue-600"
              >
                <FileText size={16} />
                Download CV
              </Button>
            </div>

          </div>
        </PageContainer>
      </Section>

      {/* Skills & Stats Section */}
      <Section className="!pt-0">
        <PageContainer>
          <div className="border-t border-border pt-12">
            
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-secondary">
                Keahlian & Kompetensi
              </p>
      
            </div>

            {/* Skills Grid (4 Kategori) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between transition-all duration-200 hover:border-blue-600/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white pb-3 border-b border-border mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center text-sm text-secondary">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-6 text-center sm:p-8"
                >
                  <p className="text-3xl font-semibold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </PageContainer>
      </Section>

      {/* Tech Stack Section */}
      <Section className='!pt-0'>
        <PageContainer>
          <div className="border-t border-border pt-12">

            <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-secondary">
              Tech Stack
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {techStack.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface p-6 text-center transition-colors duration-200 hover:border-blue-600"
                >
                  <Icon size={28} color={color} />
                  <p className="text-sm text-secondary">
                    {name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </PageContainer>
      </Section>

      {/* CTA banner */}
      <Section className="!pb-0 sm:!pb-0 lg:!pb-0">
        <div className="relative overflow-hidden">
          <img
            src={ctaBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          <div className="relative flex flex-col items-center gap-5 px-6 py-16 text-center sm:py-20">
            <Badge variant="accent">
              Hire Me Now
            </Badge>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Let's Build Something Great Together
            </h2>
            <p className="mx-auto max-w-md text-center text-neutral-400">
              I'm always open to new opportunities, collaborations,
              <br />
              or just a good conversation about technology.
            </p>
            <Button href="/contact" 
            variant="primary"
            className='mt-8 border !border-blue-600'>
              Contact Me
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About