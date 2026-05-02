import Link from 'next/link'

export default function WorkFooter() {
  return (
    <footer className="bg-[#111] px-10 pt-16 pb-8">
      <div className="max-w-container-lg mx-auto">

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 mobile:grid-cols-2 mobile:gap-8">

          <div>
            <p className="text-[0.72rem] text-[#777] mb-2">Work with me</p>
            <p className="text-[0.9rem] font-medium text-white leading-relaxed mb-6 max-w-[260px]">
              Automation specialist available for projects &amp; full-time roles.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-black text-[0.78rem] font-semibold py-2 px-[18px] rounded-full hover:bg-[#e8e8e8] transition-colors no-underline">
              Let&apos;s talk
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-[#555] tracking-[0.08em] uppercase mb-4">Connect</p>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">LinkedIn</a>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">GitHub</a>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">Twitter</a>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">Email</a>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-[#555] tracking-[0.08em] uppercase mb-4">Platforms</p>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">GoHighLevel</a>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">n8n</a>
            <a href="#" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">Zapier</a>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-[#555] tracking-[0.08em] uppercase mb-4">Site</p>
            <Link href="/" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">Home</Link>
            <Link href="/" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">My Work</Link>
            <Link href="/" className="block text-[0.78rem] text-[#777] mb-2 hover:text-white transition-colors no-underline">Contact</Link>
          </div>

        </div>

        <div className="border-t border-[#222] pt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-[0.68rem] text-[#444] no-underline hover:text-[#888] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[0.68rem] text-[#444] no-underline hover:text-[#888] transition-colors">Terms of Service</a>
          </div>
          <span className="text-[0.82rem] font-bold tracking-[0.12em] uppercase text-[#444]">MAK</span>
          <span className="text-[0.68rem] text-[#444]">© 2025 Michael Abou Khalil. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}
