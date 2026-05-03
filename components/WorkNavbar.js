import Link from 'next/link'

export default function WorkNavbar() {
  return (
    <nav className="bg-white border-b border-light-border sticky top-0 z-[100] h-[60px] flex items-center">
      <div className="max-w-container-lg mx-auto w-full px-10 flex items-center justify-between">

<div className="flex items-center gap-8 mobile:hidden">
          <Link href="/" className="text-[0.82rem] text-[#666] hover:text-black transition-colors no-underline">Work</Link>
          <Link href="/" className="text-[0.82rem] text-[#666] hover:text-black transition-colors no-underline">About</Link>
          <Link href="/" className="text-[0.82rem] text-[#666] hover:text-black transition-colors no-underline">Services</Link>
          <Link href="/" className="text-[0.82rem] text-[#666] hover:text-black transition-colors no-underline">Contact</Link>
        </div>

        <a href="mailto:michaelaboukhal@gmail.com" className="inline-flex items-center gap-2 bg-black text-white text-[0.78rem] font-semibold py-2 px-[18px] rounded-full hover:bg-[#222] transition-colors no-underline">
          Get in touch
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </div>
    </nav>
  )
}
