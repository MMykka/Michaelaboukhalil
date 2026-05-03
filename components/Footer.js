export default function Footer() {
  return (
    <footer className="border-t border-divider px-8 pt-16 pb-8">
      <div className="max-w-container mx-auto">

        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-16 mobile:grid-cols-2 mobile:gap-8">

          <div>
            <p className="text-[0.75rem] text-muted mb-4">Work with me</p>
            <p className="text-[0.9rem] font-medium text-body leading-relaxed mb-6 max-w-[280px]">
              Automation specialist available for projects &amp; full-time roles.
            </p>
            <button className="inline-flex items-center gap-2 bg-transparent text-body text-[0.8rem] font-medium py-2 px-[18px] rounded-full border border-accent hover:border-body hover:bg-body/5 transition-all cursor-pointer whitespace-nowrap">
              Let&apos;s connect
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-subtle tracking-[0.08em] uppercase mb-4">Connect</p>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">LinkedIn</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">GitHub</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">Twitter</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">Email</a>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-subtle tracking-[0.08em] uppercase mb-4">Platforms</p>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">GoHighLevel</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">n8n</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">Zapier</a>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-subtle tracking-[0.08em] uppercase mb-4">Services</p>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">GHL Automation</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">Workflow Builds</a>
            <a href="#" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">AI Integration</a>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-subtle tracking-[0.08em] uppercase mb-4">Site</p>
            <a href="#about"   className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">About</a>
            <a href="#work"    className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">My Work</a>
            <a href="#contact" className="block text-[0.8rem] text-muted mb-2 hover:text-body transition-colors no-underline">Contact</a>
          </div>

        </div>

        <div className="border-t border-divider pt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-[0.7rem] text-dim no-underline hover:text-subtle transition-colors">Privacy Policy</a>
            <a href="#" className="text-[0.7rem] text-dim no-underline hover:text-subtle transition-colors">Terms of Service</a>
          </div>
          <p className="text-[0.7rem] text-dim">© 2026 Michael Abou Khalil. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
