import {
  ArrowUpRight,
  FileText,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa6'

import heroImage from '../../../assets/images/hero-workspace.jpg'
import Button from '../../../components/ui/Button'
import PageContainer from '../../../components/layout/PageContainer'
import RotatingText from '../../../components/ui/RotatingText'

function Hero() {
  return (
    <div className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <PageContainer className="relative z-10">
        {/* Mengatur padding atas agar pas dan rapat di bawah navbar */}
        <div className="max-w-4xl pt-16 pb-24 sm:pt-24 sm:pb-32">

          {/* Nama Utama */}
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Hallo, Saya Fajar
          </h1>

          {/* Sub-heading / Peran dengan RotatingText yang lebih besar */}
          <div className="mt-4 text-2xl font-medium tracking-tight text-gray-200 sm:text-3xl md:text-4xl">
            <span>Saya Seorang </span>
            <span className="text-blue-500 font-semibold">
              <RotatingText />
            </span>
          </div>

          {/* Deskripsi dalam Bahasa Indonesia (Maksimal 3 baris) */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Saya senang mengulik teknologi, mengolah data, dan merapikan sistem operasional. Fokus saya membantu pekerjaan berjalan lebih efisien lewat kode, data, dan dukungan administratif yang rapi.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Button
              href="/work"
              showArrow
            >
              View my work
            </Button>

            <Button
              href="/about"
              variant="secondary"
            >
              About me
            </Button>

            <Button
              href="/documents/cv_mohammad_rahmi_fajar.pdf"
              variant="secondary"
            >
              <FileText size={16} />
              Download CV
            </Button>

          </div>

          {/* Availability */}
          <div className="mt-8 flex items-center gap-3 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Available for opportunities
            <ArrowUpRight size={15} />
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaInstagram size={19} />
            </a>

            <a
              href="mailto:fajar@email.com"
              aria-label="Email"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaEnvelope size={19} />
            </a>
          </div>

        </div>
      </PageContainer>
    </div>
  )
}

export default Hero