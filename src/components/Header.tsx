import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className='w-full bg-blue-100/20 px-10 sm:px-20'>
        <div className="container flex h-14 items-center ">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-base text-purple-700">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="text-base" href="#projects">Projects</Link>
            <Link className="text-base" href="#skills">Skills</Link>
            <Link className="text-base" href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

