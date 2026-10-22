import { ArrowUpRight } from 'lucide-react'

import profileImage from '../../../assets/images/profile.jpg'

import PageContainer from '../../../components/layout/PageContainer'
import Section from '../../../components/ui/Section'
import SectionHeading from '../../../components/ui/SectionHeading'
import Button from '../../../components/ui/Button'

function AboutPreview() {
  return (
    <Section id="about">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About me"
              title="A little bit about me."
            />

            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              <p>
                Saya Fajar, lulusan S1 Ilmu Komputer yang memiliki ketertarikan 
                mendalam pada teknologi, data, dan pemecahan masalah digital. 
                Latar belakang saya mencakup pengembangan aplikasi mobile, pengolahan data, 
                hingga administrasi digital.
              </p>

              <p>
                Saya menikmati proses mengubah tantangan yang rumit menjadi solusi 
                yang praktis dan efisien—baik melalui baris kode maupun sistem 
                operasional yang terstruktur.
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="/about"
                variant="secondary"
                showArrow
              >
                More about me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={profileImage}
                alt="Fajar"
                className="aspect-[4/5] w-full object-cover object-center grayscale"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-full border border-border bg-background p-3 sm:block">
              <ArrowUpRight
                size={18}
                strokeWidth={1.7}
              />
            </div>
          </div>

        </div>
      </PageContainer>
    </Section>
  )
}

export default AboutPreview