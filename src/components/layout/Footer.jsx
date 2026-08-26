import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import PageContainer from './PageContainer'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: Mail,
  },
]

function Footer() {
  return (
    <footer className="border-t border-border">
      <PageContainer>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/"
              className="text-sm font-semibold tracking-tight"
            >
              FAJAR.DEV
            </Link>

            <p className="mt-2 text-sm text-muted">
              Building useful things with code.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-secondary transition-colors hover:text-primary"
                >
                  <Icon size={18} strokeWidth={1.7} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border py-6 text-xs text-muted">
          © {new Date().getFullYear()} Fajar. All rights reserved.
        </div>
      </PageContainer>
    </footer>
  )
}

export default Footer