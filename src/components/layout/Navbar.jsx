import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logoFajar from '../../assets/images/logo-fajar-dev.svg'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Portfolio', path: '/work' },
  { label: 'Contact Me', path: '/contact' },
]

const email = 'mailto:muhammadrahmifajar69@gmail.com'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/95 backdrop-blur-sm">
      {/* Diperbarui: Padding mobile disesuaikan (px-4 sm:px-8) agar ruang logo lebih lega */}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">

        {/* Logo - Diperbarui: Tambahkan shrink-0 dan penyesuaian ukuran h-7 sm:h-8 */}
        <Link
          to="/"
          viewTransition
          onClick={closeMenu}
          className="flex shrink-0 items-center transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
        >
          <img 
            src={logoFajar} 
            alt="Fajar.dev Logo" 
            className="h-7 w-auto object-contain sm:h-8" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              viewTransition
              className={({ isActive }) =>
                [
                  'rounded-full',
                  'px-5',
                  'py-2.5',
                  'text-sm',
                  'font-medium',
                  'transition-all',
                  'duration-200',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-white hover:bg-blue-600 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Hire Me (Desktop) */}
        <a
          href={email}
          className="
            absolute
            right-6
            hidden
            rounded-full
            border
            border-blue-600
            bg-blue-600
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition-all
            duration-200
            hover:bg-transparent
            hover:text-blue-500
            sm:right-8
            md:block
            lg:right-10
          "
        >
          Hire Me
        </a>

        {/* Mobile Menu Button - Diperbarui: Tambahkan shrink-0 */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-border
            text-white
            transition-colors
            duration-200
            hover:border-blue-500
            hover:text-blue-500
            md:hidden
          "
        >
          {isOpen ? (
            <X size={19} strokeWidth={1.8} />
          ) : (
            <Menu size={19} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-8">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                viewTransition
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  border-b
                  border-border
                  py-4
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-white hover:text-blue-500'
                  }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Hire Me */}
            <a
              href={email}
              onClick={closeMenu}
              className="
                mt-4
                rounded-full
                border
                border-blue-600
                bg-blue-600
                px-5
                py-3
                text-center
                text-sm
                font-medium
                text-white
                transition-all
                duration-200
                hover:bg-transparent
                hover:text-blue-500
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar