import { ArrowUpRight } from 'lucide-react'

import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import PageContainer from '../../../components/layout/PageContainer'
import Section from '../../../components/ui/Section'

function Hero() {
  return (
    <Section className="flex min-h-[calc(100vh-5rem)] items-center">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          
          <div className="max-w-4xl">
            <Badge variant="accent">
              Computer Science · Developer
            </Badge>

            <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              I build digital
              <br />
              products with code.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              I'm Fajar, a Computer Science graduate who enjoys
              turning ideas and problems into useful digital
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/projects"
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
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-secondary lg:pb-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for opportunities
            <ArrowUpRight size={15} />
          </div>

        </div>
      </PageContainer>
    </Section>
  )
}

export default Hero