import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] bg-page/90 backdrop-blur-md border-b border-divider">
      <div className="max-w-container mx-auto px-8 h-[60px] flex items-center justify-between">

<div className="flex items-center gap-8 mobile:hidden">
          <a href="#work"    className="text-subtle text-sm hover:text-body transition-colors no-underline">Work</a>
          <a href="#about"   className="text-subtle text-sm hover:text-body transition-colors no-underline">About</a>
          <a href="#skills"  className="text-subtle text-sm hover:text-body transition-colors no-underline">Skills</a>
          <a href="#contact" className="text-subtle text-sm hover:text-body transition-colors no-underline">Contact</a>
        </div>

        <a href="#contact" className="inline-flex items-center gap-2 bg-body text-page text-[0.8rem] font-semibold py-[7px] px-4 rounded-full hover:bg-white transition-colors no-underline whitespace-nowrap leading-none">
          Get in touch
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>
    </nav>
  )
}
