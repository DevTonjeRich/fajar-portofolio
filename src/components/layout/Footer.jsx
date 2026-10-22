import { FileText, MapPin, ArrowUpRight } from 'lucide-react'
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import logoFajar from '../../assets/images/logo-fajar-dev.svg'
import { Link } from 'react-router-dom'

const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Work',
    path: '/work',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammadrahmifajar',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mhmdfajar90s',
    icon: FaInstagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6282266140857?text=Halo%20Rahmi,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.',
    icon: FaWhatsapp,
  },
]

function Footer() {
  return (
    /* Mengubah bg-black menjadi bg-neutral-950 agar ada perbedaan kontras tipis dari background utama */
    <footer className="border-t border-neutral-700 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr]">

          {/* Brand */}
          <div>
           <Link
              to="/"
              className="inline-block transition-opacity duration-200 hover:opacity-80"
            >
              <img 
                src={logoFajar} 
                alt="Fajar.dev Logo" 
                className="h-5 w-auto" // Anda bisa mengubah ukurannya misal h-7 atau h-8 sesuai kebutuhan
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-400">
              Computer Science graduate building digital
              products with code.
            </p>
            
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-neutral-300 transition-colors duration-200 hover:!text-blue-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-800
                      bg-neutral-900/50
                      text-neutral-300
                      transition-all
                      duration-200
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Location
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-neutral-200">
              <MapPin size={16} strokeWidth={1.7} />
              <span>Btn Kendari Permai, Sulawesi Tenggara, Indonesia</span>
            </div>

            {/* Map */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kendari%2C+Indonesia"
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                mt-5
                block
                overflow-hidden
                rounded-2xl
                border
                border-neutral-800
              "
            >
              <iframe
                title="Kendari Location"
                src="https://www.google.com/maps?q=Btn Kendari Permai%2C%20Indonesia&output=embed"
                className="
                  pointer-events-none
                  h-44
                  w-full
                  grayscale
                  opacity-60
                  transition-all
                  duration-500
                  group-hover:grayscale-0
                  group-hover:opacity-80
                "
                loading="lazy"
              />

              {/* Map Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />

              <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm">
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-neutral-800/80" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-neutral-500">

          <p>
            © 2026 Fajar. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5">
            Designed & built with React
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer