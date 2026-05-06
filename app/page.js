import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Marquee from '@/components/Marquee'
import Footer from '@/components/Footer'
import TiltCard from '@/components/TiltCard'

export const metadata = {
  title: 'Michael Abou Khalil — Automation & AI Specialist',
  description: 'Michael Abou Khalil is an automation and AI specialist building GoHighLevel, n8n, and Zapier systems that eliminate manual work, accelerate growth, and run 24/7. Available for hire.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Michael Abou Khalil — Automation & AI Specialist',
    description: 'Building GoHighLevel, n8n, and Zapier systems that eliminate manual work and run 24/7. Available for hire.',
    url: '/',
    images: [{ url: '/michael.png', width: 1200, height: 630, alt: 'Michael Abou Khalil' }],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="min-h-[62vh] flex flex-col justify-end px-8 pb-16 pt-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,80,100,0.10) 0%, transparent 70%)' }}
        />
        <div className="max-w-container mx-auto w-full relative">
          <h1 className="hero-heading mb-8" data-animate="fade-up">
            Automation &amp; AI specialist<br className="mobile:hidden" /> who builds while you sleep.
          </h1>
          <a href="#contact" data-animate="fade-up" data-delay="200" className="inline-flex items-center gap-[10px] bg-surface border border-divider rounded-full px-[18px] py-2 text-body text-[0.875rem] hover:border-accent transition-colors no-underline">
            <div className="w-9 h-5 bg-accent rounded-full relative shrink-0">
              <div className="w-[14px] h-[14px] bg-body rounded-full absolute right-[3px] top-[3px]" />
            </div>
            Open to work
          </a>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── ABOUT ME ── */}
      <section id="about" className="px-8 py-20">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center mobile:grid-cols-1 mobile:gap-8">

            <div>
              <div data-animate="fade-up" className="inline-flex items-center gap-2 text-xs font-medium text-subtle tracking-[0.02em] mb-6">
                <span className="w-1.5 h-1.5 bg-subtle rounded-full shrink-0" />
                About me
              </div>
              <h2 data-animate="fade-up" data-delay="100" className="section-heading mb-6 max-w-[520px]">
                I replace manual work with systems built to run themselves.
              </h2>
              <p data-animate="fade-up" data-delay="200" className="text-subtle text-[1rem] leading-[1.65] mb-8 max-w-[480px]">
                I&apos;m Michael Abou Khalil, an automation and AI specialist focused on GoHighLevel, n8n, and Zapier — building systems that eliminate manual work, accelerate growth, and run 24/7 without supervision. I also use Claude Code to integrate AI-powered agents directly into the workflows I deliver.
              </p>
              <a data-animate="fade-up" data-delay="300" href="#work" className="inline-flex items-center gap-2 bg-body text-page text-[0.875rem] font-semibold px-5 py-[10px] rounded-full hover:bg-white transition-colors no-underline whitespace-nowrap leading-none">
                See my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div data-animate="fade-left" data-delay="150" className="rounded-2xl overflow-hidden bg-surface">
              <img src="/michael.png" alt="Michael Abou Khalil" className="w-full h-auto block" />
            </div>

          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="work" className="px-8 py-20">
        <div className="h-px bg-divider mb-16" />
        <div className="max-w-container mx-auto">

          <div data-animate="fade-up" className="flex items-start gap-8 mb-12 mobile:flex-col mobile:gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-subtle tracking-[0.02em] whitespace-nowrap pt-[0.4rem]">
              <span className="w-1.5 h-1.5 bg-subtle rounded-full shrink-0" />
              My Work
            </div>
            <h2 className="section-heading">Some of my work.</h2>
          </div>

          <div className="grid grid-cols-3 gap-5 mobile:grid-cols-2 mobile:gap-4 xs:grid-cols-1">

            {/* ── Card 1: Lead Capture ── */}
            <Link data-animate="fade-up" data-delay="100" href="/work/lead-capture" className="bg-surface border border-divider rounded-xl overflow-hidden hover:border-[#3a3a55] transition-colors no-underline text-inherit block group">
              <div className="aspect-[4/3] relative overflow-hidden" style={{background:'#13131a'}}>
                {/* Dot grid */}
                <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',backgroundSize:'20px 20px'}} />
                {/* Vignette */}
                <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #13131a 100%)'}} />
                {/* Project number */}
                <div className="absolute top-4 left-5 text-[0.6rem] font-mono text-dim tracking-widest">01</div>
                {/* Arrow */}
                <div className="absolute top-3 right-3 pointer-events-none h-9 rounded-full flex flex-row-reverse items-center overflow-hidden transition-[width] duration-300 ease-in-out w-9 group-hover:w-[116px] mobile:w-[116px]" style={{background:'rgba(255,255,255,0.12)', backdropFilter:'blur(6px)', border:'1px solid rgba(255,255,255,0.18)'}}>
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path d="M5 17L17 5M17 5H7M17 5V15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[0.7rem] font-semibold whitespace-nowrap pr-[13px] opacity-0 group-hover:opacity-100 mobile:opacity-100 transition-opacity duration-150 delay-100">More Info</span>
                </div>
                {/* Flow diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2.5">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-surface border border-divider flex items-center justify-center">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <rect x="2" y="2" width="13" height="13" rx="2.5" stroke="#6b6b7a" strokeWidth="1.2"/>
                          <path d="M5 6.5h7M5 9h5M5 11.5h3" stroke="#6b6b7a" strokeWidth="1.1" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-[0.54rem] text-muted uppercase tracking-widest font-medium">Lead</span>
                    </div>
                    <svg width="22" height="6" viewBox="0 0 22 6" fill="none" style={{marginBottom:'18px'}}>
                      <path d="M0 3h18M15 1l3 2-3 2" stroke="#2a2a38" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-surface border border-[#2e2e60] flex items-center justify-center" style={{boxShadow:'0 0 18px rgba(80,80,200,0.12)'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <circle cx="8.5" cy="8.5" r="5.5" stroke="#8080c0" strokeWidth="1.2"/>
                          <path d="M6.5 8.5l1.5 1.5L11 5.5" stroke="#8080c0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[0.54rem] text-subtle uppercase tracking-widest font-medium">AI</span>
                    </div>
                    <svg width="22" height="6" viewBox="0 0 22 6" fill="none" style={{marginBottom:'18px'}}>
                      <path d="M0 3h18M15 1l3 2-3 2" stroke="#2a2a38" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-surface border border-[#283028] flex items-center justify-center" style={{boxShadow:'0 0 18px rgba(60,160,60,0.08)'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <rect x="2" y="2.5" width="13" height="12" rx="2.5" stroke="#5caa5c" strokeWidth="1.2"/>
                          <path d="M5.5 1.5V4M11.5 1.5V4M2 6.5h13" stroke="#5caa5c" strokeWidth="1.2" strokeLinecap="round"/>
                          <rect x="5.5" y="9" width="2.5" height="2.5" rx="0.5" fill="#5caa5c" opacity="0.7"/>
                        </svg>
                      </div>
                      <span className="text-[0.54rem] text-body uppercase tracking-widest font-medium">Booked</span>
                    </div>
                  </div>
                </div>
                {/* Category */}
                <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-dim" />
                  <span className="text-[0.56rem] text-dim font-medium tracking-[0.1em] uppercase">Automation Flow</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[1.1rem] font-semibold text-body mb-[0.4rem]">Lead Capture to Booked Call</h3>
                <p className="text-[0.92rem] text-muted leading-[1.55]">Automatically captures, qualifies, and nurtures leads into booked calls using AI and smart follow-ups — increasing conversion rates while eliminating manual outreach.</p>
              </div>
            </Link>

            {/* ── Card 2: Event SaaS Platform ── */}
            <Link data-animate="fade-up" data-delay="200" href="/work/client-onboarding" className="bg-surface border border-divider rounded-xl overflow-hidden hover:border-[#3a3a55] transition-colors no-underline text-inherit block group">
              <div className="aspect-[4/3] relative overflow-hidden" style={{background:'#13131a'}}>
                {/* Grid pattern */}
                <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
                <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #13131a 100%)'}} />
                {/* Project number */}
                <div className="absolute top-4 left-5 text-[0.6rem] font-mono text-dim tracking-widest">02</div>
                {/* Arrow */}
                <div className="absolute top-3 right-3 pointer-events-none h-9 rounded-full flex flex-row-reverse items-center overflow-hidden transition-[width] duration-300 ease-in-out w-9 group-hover:w-[116px] mobile:w-[116px]" style={{background:'rgba(255,255,255,0.12)', backdropFilter:'blur(6px)', border:'1px solid rgba(255,255,255,0.18)'}}>
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path d="M5 17L17 5M17 5H7M17 5V15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[0.7rem] font-semibold whitespace-nowrap pr-[13px] opacity-0 group-hover:opacity-100 mobile:opacity-100 transition-opacity duration-150 delay-100">More Info</span>
                </div>
                {/* Mini dashboard */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[192px]">
                    <div className="bg-surface border border-divider rounded-lg p-3">
                      <div className="text-[0.54rem] text-dim uppercase tracking-wider mb-1.5">Attendees</div>
                      <div className="text-[0.92rem] font-semibold text-body leading-none">2.4K</div>
                    </div>
                    <div className="bg-surface border border-divider rounded-lg p-3">
                      <div className="text-[0.54rem] text-dim uppercase tracking-wider mb-1.5">Converted</div>
                      <div className="text-[0.92rem] font-semibold text-subtle leading-none">23%</div>
                    </div>
                    <div className="col-span-2 bg-surface border border-divider rounded-lg p-3">
                      <div className="text-[0.54rem] text-dim uppercase tracking-wider mb-1.5">Revenue / mo</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[0.92rem] font-semibold text-body leading-none">$12.4K</span>
                        <span className="text-[0.58rem] text-muted">+18% MoM</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category */}
                <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-dim" />
                  <span className="text-[0.56rem] text-dim font-medium tracking-[0.1em] uppercase">SaaS Platform</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[1.1rem] font-semibold text-body mb-[0.4rem]">Event Data Monetization SaaS Platform</h3>
                <p className="text-[0.92rem] text-muted leading-[1.55]">Turns past event data into new revenue by enabling businesses to retarget attendees, generate leads, and track performance in real time.</p>
              </div>
            </Link>

            {/* ── Card 3: Multi-Platform Data Sync ── */}
            <Link data-animate="fade-up" data-delay="300" href="/work/data-sync" className="bg-surface border border-divider rounded-xl overflow-hidden hover:border-[#3a3a55] transition-colors no-underline text-inherit block group">
              <div className="aspect-[4/3] relative overflow-hidden" style={{background:'#13131a'}}>
                {/* Dot grid */}
                <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',backgroundSize:'20px 20px'}} />
                <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #13131a 100%)'}} />
                {/* Project number */}
                <div className="absolute top-4 left-5 text-[0.6rem] font-mono text-dim tracking-widest">03</div>
                {/* Arrow */}
                <div className="absolute top-3 right-3 pointer-events-none h-9 rounded-full flex flex-row-reverse items-center overflow-hidden transition-[width] duration-300 ease-in-out w-9 group-hover:w-[116px] mobile:w-[116px]" style={{background:'rgba(255,255,255,0.12)', backdropFilter:'blur(6px)', border:'1px solid rgba(255,255,255,0.18)'}}>
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path d="M5 17L17 5M17 5H7M17 5V15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[0.7rem] font-semibold whitespace-nowrap pr-[13px] opacity-0 group-hover:opacity-100 mobile:opacity-100 transition-opacity duration-150 delay-100">More Info</span>
                </div>
                {/* Hub and spoke */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  {/* Left platforms */}
                  <div className="flex flex-col gap-2">
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
                      <span className="text-[0.6rem] text-muted font-medium">CRM</span>
                    </div>
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
                      <span className="text-[0.6rem] text-muted font-medium">Sheets</span>
                    </div>
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
                      <span className="text-[0.6rem] text-muted font-medium">Airtable</span>
                    </div>
                  </div>
                  {/* Center sync hub */}
                  <div className="flex flex-col items-center gap-1">
                    <svg width="30" height="10" viewBox="0 0 30 10" fill="none">
                      <path d="M0 5h24M20 2l5 3-5 3" stroke="#2a2a38" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="w-9 h-9 rounded-full bg-surface border border-[#2a2a48] flex items-center justify-center" style={{boxShadow:'0 0 16px rgba(70,70,170,0.14)'}}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 4.5C3.5 2.5 5.5 1.5 7 1.5c2.5 0 4.5 2 4.5 4.5" stroke="#7070b0" strokeWidth="1.15" strokeLinecap="round"/>
                        <path d="M11.5 9.5C10.5 11.5 8.5 12.5 7 12.5c-2.5 0-4.5-2-4.5-4.5" stroke="#7070b0" strokeWidth="1.15" strokeLinecap="round"/>
                        <path d="M10 2l2 3M4 12L2 9" stroke="#7070b0" strokeWidth="1.15" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <svg width="30" height="10" viewBox="0 0 30 10" fill="none">
                      <path d="M30 5H6M10 2L5 5l5 3" stroke="#2a2a38" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Right platforms */}
                  <div className="flex flex-col gap-2">
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-subtle shrink-0" />
                      <span className="text-[0.6rem] text-subtle font-medium">Slack</span>
                    </div>
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-subtle shrink-0" />
                      <span className="text-[0.6rem] text-subtle font-medium">Notion</span>
                    </div>
                    <div className="bg-surface border border-divider rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-subtle shrink-0" />
                      <span className="text-[0.6rem] text-subtle font-medium">GHL</span>
                    </div>
                  </div>
                </div>
                {/* Category */}
                <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-dim" />
                  <span className="text-[0.56rem] text-dim font-medium tracking-[0.1em] uppercase">Data Integration</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[1.1rem] font-semibold text-body mb-[0.4rem]">Multi-Platform Data Sync</h3>
                <p className="text-[0.92rem] text-muted leading-[1.55]">Syncs data across CRMs, spreadsheets, and tools in real-time — eliminating manual entry and ensuring accurate, centralized business data.</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section id="skills" className="px-8 py-20">
        <div className="h-px bg-divider mb-16" />
        <div className="max-w-container mx-auto">

          <div data-animate="fade-up" className="flex items-start gap-8 mb-8 mobile:flex-col mobile:gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-subtle tracking-[0.02em] whitespace-nowrap pt-[0.4rem]">
              <span className="w-1.5 h-1.5 bg-subtle rounded-full shrink-0" />
              My expertise
            </div>
            <div>
              <h2 className="section-heading mb-4">Deep in the tools. Fluent in the logic.</h2>
              <p className="text-subtle text-[1rem] leading-[1.65] max-w-[580px]">
                I don&apos;t just connect apps — I architect the logic behind them. Three platforms, one consistent approach: map the process, eliminate the waste, automate the rest.
              </p>
            </div>
          </div>

          <div className="relative mt-12">
            {/* Connecting line — hidden on mobile */}
            <div data-animate="fade-up" data-delay="150" className="absolute top-24 left-[16.67%] right-[16.67%] h-px bg-divider mobile:hidden overflow-hidden">
              <div style={{
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '35%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
                boxShadow: '0 0 8px 3px rgba(255,255,255,0.45)',
                animation: 'glow-sweep 5s linear infinite',
              }} />
            </div>

            <div className="grid grid-cols-3 gap-8 mobile:grid-cols-1 mobile:gap-12">

              <div data-animate="fade-up" data-delay="100" className="group flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden rounded-2xl relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 ring-1 ring-divider">
                  <img src="/python1.png" alt="Python scripting" className="w-full h-full object-cover" style={{backgroundColor:'#171717'}}/>
                </div>
                <div className="mt-6 text-center px-2">
                  <h3 className="text-[1.1rem] font-semibold text-body mb-1">Custom Automation Development</h3>
                  <p className="text-[0.85rem] text-muted mb-4">Python Developer</p>
                  <p className="text-[0.9rem] text-subtle leading-[1.6]">Python scripts for automating tasks, processing data, and connecting systems without native integrations — built to run reliably without supervision.</p>
                </div>
              </div>

              <div data-animate="fade-up" data-delay="250" className="group flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden rounded-2xl relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 ring-1 ring-divider" style={{backgroundColor:'#171717'}}>
                  <img src="/webhook3.png" alt="GHL n8n Zapier" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 text-center px-2">
                  <h3 className="text-[1.1rem] font-semibold text-body mb-1">GHL, n8n &amp; Zapier</h3>
                  <p className="text-[0.85rem] text-muted mb-4">Workflow Architect</p>
                  <p className="text-[0.9rem] text-subtle leading-[1.6]">GoHighLevel for CRM and sales automation, n8n for complex multi-branch workflows, and Zapier for fast app-to-app connections — the right tool for each job.</p>
                </div>
              </div>

              <div data-animate="fade-up" data-delay="400" className="group flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden rounded-2xl relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 ring-1 ring-divider flex items-center justify-center" style={{backgroundColor:'#171717'}}>
                  <img src="claude.jpeg" alt="Claude Code AI" className="w-3/5 h-3/5 object-contain" />
                </div>
                <div className="mt-6 text-center px-2">
                  <h3 className="text-[1.1rem] font-semibold text-body mb-1">Claude Code &amp; AI</h3>
                  <p className="text-[0.85rem] text-muted mb-4">AI-Powered Development</p>
                  <p className="text-[0.9rem] text-subtle leading-[1.6]">I use Claude Code to bring AI into the automations I build — agents that reason and decide beyond simple if-then logic, delivering workflows that adapt instead of just execute.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-8 py-20">
        <div className="h-px bg-divider mb-16" />
        <div className="max-w-container mx-auto">

          <div data-animate="fade-up" className="flex items-start gap-8 mb-12 mobile:flex-col mobile:gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-subtle tracking-[0.02em] whitespace-nowrap pt-[0.4rem]">
              <span className="w-1.5 h-1.5 bg-subtle rounded-full shrink-0" />
              Services
            </div>
            <div>
              <h2 className="section-heading mb-4">What I specialize in.</h2>
              <p className="text-subtle text-[1rem] leading-[1.65] max-w-[560px]">
                Whether you need a full CRM automation stack or a single workflow that saves your team 10 hours a week — I build it on whichever platform fits best.
              </p>
            </div>
          </div>

          <TiltCard>
          <div className="grid grid-cols-3 gap-5 mobile:grid-cols-2 mobile:gap-4 xs:grid-cols-1">

            {/* Lead Generation Automation — orange */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="100">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 75% 65% at 62% 55%, rgba(251,146,60,0.13) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <circle cx="58" cy="120" r="46" stroke="#fb923c" strokeWidth="1.8"/>
                  <path d="M106 120h38M136 109l14 11-14 11" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="180" cy="120" r="46" stroke="#f97316" strokeWidth="1.8"/>
                  <path d="M226 120h38M256 109l14 11-14 11" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="302" cy="120" r="46" stroke="#fb923c" strokeWidth="1.8"/>
                  <path d="M38 114h40M38 126h24" stroke="#fdba74" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M159 114h42M159 126h26" stroke="#fdba74" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M281 114h42M281 126h26" stroke="#fdba74" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">Lead Generation Automation</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">GoHighLevel</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Zapier</span>
              </div>
            </div>

            {/* CRM & Pipeline Automation — blue */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="200">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 90% 65% at 50% 55%, rgba(96,165,250,0.12) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <rect x="8" y="93" width="70" height="54" rx="8" stroke="#60a5fa" strokeWidth="1.8"/>
                  <path d="M80 120h16M88 112l12 8-12 8" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="96" y="93" width="70" height="54" rx="8" stroke="#3b82f6" strokeWidth="1.8"/>
                  <path d="M168 120h16M176 112l12 8-12 8" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="184" y="93" width="70" height="54" rx="8" stroke="#60a5fa" strokeWidth="1.8"/>
                  <path d="M256 120h16M264 112l12 8-12 8" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="272" y="93" width="80" height="54" rx="8" stroke="#93c5fd" strokeWidth="1.8"/>
                  <path d="M22 115h42M22 125h28" stroke="#93c5fd" strokeWidth="1.1" strokeLinecap="round"/>
                  <path d="M110 115h42M110 125h28" stroke="#93c5fd" strokeWidth="1.1" strokeLinecap="round"/>
                  <path d="M198 115h42M198 125h28" stroke="#93c5fd" strokeWidth="1.1" strokeLinecap="round"/>
                  <path d="M286 115h50M286 125h34" stroke="#93c5fd" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">CRM &amp; Pipeline Automation</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">GoHighLevel</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Zapier</span>
              </div>
            </div>

            {/* App & API Integrations — violet */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="300">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(167,139,250,0.13) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <circle cx="180" cy="120" r="32" stroke="#a78bfa" strokeWidth="2"/>
                  <line x1="180" y1="88" x2="180" y2="44" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="180" cy="30" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="157" y1="102" x2="106" y2="64" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="92" cy="52" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="148" y1="120" x2="82" y2="120" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="66" cy="120" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="157" y1="138" x2="106" y2="176" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="92" cy="188" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="203" y1="102" x2="254" y2="64" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="268" cy="52" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="212" y1="120" x2="278" y2="120" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="294" cy="120" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                  <line x1="203" y1="138" x2="254" y2="176" stroke="#c4b5fd" strokeWidth="1.3"/>
                  <circle cx="268" cy="188" r="16" stroke="#a78bfa" strokeWidth="1.8"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">App &amp; API Integrations</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Zapier</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Make</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">REST APIs</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-5 mt-5 mobile:grid-cols-2 mobile:gap-4 xs:grid-cols-1">

            {/* Client Onboarding Systems — green */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="100">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 70% 65% at 40% 55%, rgba(74,222,128,0.11) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <line x1="72" y1="44" x2="72" y2="196" stroke="#86efac" strokeWidth="1.5"/>
                  <circle cx="72" cy="72" r="14" stroke="#4ade80" strokeWidth="1.8"/>
                  <path d="M65 72l5 5 9-9" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M98 67h170M98 79h110" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="72" cy="120" r="14" stroke="#4ade80" strokeWidth="1.8"/>
                  <path d="M65 120l5 5 9-9" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M98 115h150M98 127h96" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="72" cy="168" r="14" stroke="#4ade80" strokeWidth="1.8"/>
                  <path d="M65 168l5 5 9-9" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M98 163h130M98 175h84" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">Client Onboarding Systems</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">GoHighLevel</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Zapier</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
              </div>
            </div>

            {/* AI-Powered Workflows — indigo */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="200">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 80% 70% at 50% 55%, rgba(99,102,241,0.14) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <circle cx="44" cy="65" r="16" stroke="#818cf8" strokeWidth="1.8"/>
                  <circle cx="44" cy="120" r="16" stroke="#818cf8" strokeWidth="1.8"/>
                  <circle cx="44" cy="175" r="16" stroke="#818cf8" strokeWidth="1.8"/>
                  <circle cx="180" cy="45" r="16" stroke="#6366f1" strokeWidth="1.8"/>
                  <circle cx="180" cy="120" r="16" stroke="#6366f1" strokeWidth="1.8"/>
                  <circle cx="180" cy="195" r="16" stroke="#6366f1" strokeWidth="1.8"/>
                  <circle cx="316" cy="85" r="16" stroke="#818cf8" strokeWidth="1.8"/>
                  <circle cx="316" cy="155" r="16" stroke="#818cf8" strokeWidth="1.8"/>
                  <line x1="60" y1="65" x2="164" y2="45" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="65" x2="164" y2="120" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="65" x2="164" y2="195" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="120" x2="164" y2="45" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="120" x2="164" y2="120" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="120" x2="164" y2="195" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="175" x2="164" y2="45" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="175" x2="164" y2="120" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="60" y1="175" x2="164" y2="195" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="45" x2="300" y2="85" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="120" x2="300" y2="85" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="195" x2="300" y2="85" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="45" x2="300" y2="155" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="120" x2="300" y2="155" stroke="#a5b4fc" strokeWidth="0.9"/>
                  <line x1="196" y1="195" x2="300" y2="155" stroke="#a5b4fc" strokeWidth="0.9"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">AI-Powered Workflows</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Claude Code</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">OpenAI</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
              </div>
            </div>

            {/* Workflow Audits & Consulting — cyan */}
            <div className="bg-surface border border-divider rounded-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col justify-between" data-tilt data-animate="scale-in" data-delay="300">
              <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 75% 65% at 62% 55%, rgba(34,211,238,0.11) 0%, transparent 70%)'}} />
              <div className="absolute inset-0 pointer-events-none" style={{opacity:0.18}}>
                <svg width="100%" height="100%" viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid slice">
                  <rect x="34" y="20" width="136" height="180" rx="8" stroke="#67e8f9" strokeWidth="1.8"/>
                  <circle cx="54" cy="70" r="7" stroke="#22d3ee" strokeWidth="1.5"/>
                  <path d="M49.5 70l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M74 66h74M74 75h50" stroke="#a5f3fc" strokeWidth="1.1" strokeLinecap="round"/>
                  <circle cx="54" cy="108" r="7" stroke="#22d3ee" strokeWidth="1.5"/>
                  <path d="M49.5 108l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M74 104h64M74 113h42" stroke="#a5f3fc" strokeWidth="1.1" strokeLinecap="round"/>
                  <circle cx="54" cy="146" r="7" stroke="#22d3ee" strokeWidth="1.5"/>
                  <path d="M49.5 146l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M74 142h54M74 151h36" stroke="#a5f3fc" strokeWidth="1.1" strokeLinecap="round"/>
                  <circle cx="262" cy="130" r="58" stroke="#22d3ee" strokeWidth="1.8"/>
                  <circle cx="262" cy="130" r="32" stroke="#67e8f9" strokeWidth="1.2"/>
                  <line x1="306" y1="174" x2="336" y2="204" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-[1.2rem] font-semibold text-body">Workflow Audits &amp; Consulting</h3>
              </div>
              <div className="relative z-10 flex flex-wrap gap-[0.4rem]">
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">GoHighLevel</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">n8n</span>
                <span className="inline-flex items-center bg-surface2 border border-divider rounded-full px-3.5 py-[5px] text-[0.88rem] text-subtle whitespace-nowrap">Zapier</span>
              </div>
            </div>

          </div>
          </TiltCard>

        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-8 py-20">
        <div className="h-px bg-divider mb-16" />
        <div className="max-w-container mx-auto">

          <div data-animate="fade-up" className="flex items-start gap-8 mb-16 mobile:flex-col mobile:gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-subtle tracking-[0.02em] whitespace-nowrap pt-[0.4rem]">
              <span className="w-1.5 h-1.5 bg-subtle rounded-full shrink-0" />
              How I work
            </div>
            <h2 className="section-heading">I learn fast, build clean, and document everything.</h2>
          </div>

          <div className="grid grid-cols-4 gap-6 mobile:grid-cols-2 mobile:gap-5 xs:grid-cols-1">

            <div data-animate="fade-up" data-delay="100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-surface border border-divider rounded-full flex items-center justify-center text-[0.7rem] text-muted shrink-0">1</div>
                <div className="h-px flex-1 bg-divider" />
              </div>
              <h3 className="text-[1rem] font-semibold text-body mb-2">Understand the System</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">I start by getting into the existing stack, tools, and workflows — understanding what&apos;s already in place and where the real friction lives before proposing anything.</p>
            </div>

            <div data-animate="fade-up" data-delay="200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-surface border border-divider rounded-full flex items-center justify-center text-[0.7rem] text-muted shrink-0">2</div>
                <div className="h-px flex-1 bg-divider" />
              </div>
              <h3 className="text-[1rem] font-semibold text-body mb-2">Align Before Building</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">I map the logic and get alignment with the team early. I&apos;d rather spend an extra hour scoping than rebuild a workflow that solves the wrong problem.</p>
            </div>

            <div data-animate="fade-up" data-delay="300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-surface border border-divider rounded-full flex items-center justify-center text-[0.7rem] text-muted shrink-0">3</div>
                <div className="h-px flex-1 bg-divider" />
              </div>
              <h3 className="text-[1rem] font-semibold text-body mb-2">Build &amp; Test Thoroughly</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">I build incrementally and test every branch. I don&apos;t ship brittle automations — if an edge case can break it, I find it before it reaches production.</p>
            </div>

            <div data-animate="fade-up" data-delay="400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-surface border border-divider rounded-full flex items-center justify-center text-[0.7rem] text-muted shrink-0">4</div>
                <div className="flex-1" />
              </div>
              <h3 className="text-[1rem] font-semibold text-body mb-2">Document for the Team</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">Everything I build is documented clearly enough for someone else to maintain, extend, or audit. I write for the long term, not just the moment I ship it.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="px-8 pt-16 pb-24">
        <div className="max-w-container mx-auto">
          <div data-animate="fade-up" className="bg-[#161618] border border-divider rounded-[20px] p-16 text-center mobile:p-10">
            <h2 className="section-heading mb-5">Open to new opportunities.</h2>
            <p className="text-subtle text-[1rem] leading-[1.65] max-w-[480px] mx-auto mb-8">
              I&apos;m actively looking for a role where I can bring automation and AI expertise to a great team. If that sounds like a fit, I&apos;d love to connect.
            </p>
            <a href="mailto:michaelaboukhal@gmail.com" className="inline-flex items-center gap-2 bg-body text-page text-[0.9rem] font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors no-underline whitespace-nowrap leading-none">
              Send me an email
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
