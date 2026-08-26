import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import PageContainer from './PageContainer'

const navigation = [
  {
    label: 'Work',
    path: '/projects',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-border">
      <PageContainer>

        {/* Navigation Bar */}
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight"
          >
            FAJAR.DEV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex items-center justify-center rounded-full p-2 text-secondary hover:text-primary md:hidden"
          >
            {menuOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>

        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-border py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

      </PageContainer>
    </header>
  )
}

export default Navbar