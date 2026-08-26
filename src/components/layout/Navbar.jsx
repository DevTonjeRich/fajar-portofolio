import { Menu } from 'lucide-react'
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
  return (
    <header className="border-b border-border">
      <PageContainer>
        <nav className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight"
          >
            FAJAR.DEV
          </Link>

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

          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex items-center justify-center rounded-full p-2 text-secondary hover:text-primary md:hidden"
          >
            <Menu size={21} strokeWidth={1.8} />
          </button>
        </nav>
      </PageContainer>
    </header>
  )
}

export default Navbar