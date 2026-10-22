import {
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6'

import Button from '../../../components/ui/Button'
import PageContainer from '../../../components/layout/PageContainer'
import Section from '../../../components/ui/Section'

function ContactSection() {
  const email = 'muhammadrahmifajar69@gmail.com'

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Let's work together")}`

  return (
    <Section id="contact">
      <PageContainer>
        <div className="border-t border-border pt-12 sm:pt-16">

          {/* Main Content */}
          <div className="grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:gap-20">

            {/* Left */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-500">
                Get in touch
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                Let's work
                <br />
                together.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
                Have a project, opportunity, or just want to say hello?
                I'd love to hear from you.
              </p>

              {/* Email CTA menggunakan komponen Button yang konsisten */}
              <div className="mt-8">
                <Button
                  href={gmailUrl}
                  showArrow={true}
                >
                  Say hello
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="lg:pt-2">

              {/* Email */}
              <div className="border-t border-border py-6">
                <div className="flex items-center gap-3">
                  <Mail
                    size={17}
                    strokeWidth={1.7}
                    className="text-blue-500"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                    Email
                  </p>
                </div>

                <a
                  href={`mailto:${email}`}
                  className="
                    mt-3
                    block
                    break-all
                    text-base
                    text-white
                    transition-colors
                    duration-200
                    hover:text-blue-500
                    sm:text-lg
                  "
                >
                  {email}
                </a>
              </div>

              {/* Social */}
              <div className="border-t border-border py-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                    />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                    Social
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-4">

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-transparent
                      text-gray-400
                      transition-all
                      duration-200
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <FaGithub size={19} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mohammadrahmifajar"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-transparent
                      text-gray-400
                      transition-all
                      duration-200
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/mhmdfajar90s"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-transparent
                      text-gray-400
                      transition-all
                      duration-200
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <FaInstagram size={19} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6282266140857?text=Halo%20Rahmi,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi."
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-transparent
                      text-gray-400
                      transition-all
                      duration-200
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <FaWhatsapp size={19} />
                  </a>

                </div>
              </div>

              {/* Location */}
              <div className="border-y border-border py-6">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={17}
                    strokeWidth={1.7}
                    className="text-blue-500"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                    Location
                  </p>
                </div>

                <p className="mt-3 text-base text-white sm:text-lg">
                  Btn Kendari Permai, Kambu, Sulawesi Tenggara, Indonesia
                </p>
              </div>

            </div>

          </div>

        </div>
      </PageContainer>
    </Section>
  )
}

export default ContactSection