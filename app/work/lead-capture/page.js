import Link from 'next/link'
import WorkNavbar from '@/components/WorkNavbar'
import WorkFooter from '@/components/WorkFooter'

export const metadata = {
  title: 'Lead Capture → Booked Call — Michael Abou Khalil',
}

export default function LeadCapturePage() {
  return (
    <>
      <WorkNavbar />

      {/* Hero */}
      <section className="grid grid-cols-[28fr_72fr] gap-5 min-h-[420px] px-16 py-5 mobile:grid-cols-1 mobile:px-6">
        <div className="p-10 flex flex-col justify-between bg-white rounded-[14px] mobile:justify-start mobile:gap-8">
          <Link href="/" className="inline-flex items-center gap-3 text-[0.88rem] font-medium text-black no-underline w-fit group">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#222]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10 7H4M6 4L3 7l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Go Back
          </Link>
          <p className="text-[1.1rem] text-black leading-[1.55] max-w-[360px]">
            We built a fully automated pipeline that takes a new lead from first touch to a confirmed calendar booking — without a single manual action from the team.
          </p>
        </div>
        <div className="overflow-hidden rounded-[14px] mobile:min-h-60">
          <div className="w-full h-full min-h-[410px] relative overflow-hidden" style={{background:'#13131a'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
            <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, #13131a 100%)'}} />
            <div className="absolute top-6 right-7 text-[0.65rem] font-mono text-dim tracking-widest">01</div>

            {/* 4-step flow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-5">

                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#18181b] border border-[#2a2a30] flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <rect x="3" y="3" width="20" height="20" rx="4" stroke="#6b6b7a" strokeWidth="1.5"/>
                      <path d="M8 10h10M8 13.5h7M8 17h5" stroke="#6b6b7a" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-[0.65rem] text-muted uppercase tracking-widest font-medium">Lead</span>
                </div>

                <svg width="36" height="8" viewBox="0 0 36 8" fill="none" style={{marginBottom:'22px'}}>
                  <path d="M0 4h30M26 1.5l5 2.5-5 2.5" stroke="#2a2a38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#18181b] border border-[#2e2e60] flex items-center justify-center" style={{boxShadow:'0 0 28px rgba(80,80,200,0.15)'}}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="8.5" stroke="#8080c0" strokeWidth="1.5"/>
                      <path d="M10 13l2.5 2.5L16.5 8.5" stroke="#8080c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[0.65rem] text-subtle uppercase tracking-widest font-medium">AI Filter</span>
                </div>

                <svg width="36" height="8" viewBox="0 0 36 8" fill="none" style={{marginBottom:'22px'}}>
                  <path d="M0 4h30M26 1.5l5 2.5-5 2.5" stroke="#2a2a38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#18181b] border border-[#2a2a30] flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M4 8h18M4 13h13" stroke="#6b6b7a" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="20" cy="19" r="4.5" stroke="#9898a8" strokeWidth="1.3"/>
                      <path d="M20 17.5v2l1 1" stroke="#9898a8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[0.65rem] text-muted uppercase tracking-widest font-medium">Follow-up</span>
                </div>

                <svg width="36" height="8" viewBox="0 0 36 8" fill="none" style={{marginBottom:'22px'}}>
                  <path d="M0 4h30M26 1.5l5 2.5-5 2.5" stroke="#2a2a38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#18181b] border border-[#283028] flex items-center justify-center" style={{boxShadow:'0 0 28px rgba(60,160,60,0.1)'}}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <rect x="3" y="4" width="20" height="18" rx="4" stroke="#5caa5c" strokeWidth="1.5"/>
                      <path d="M8 3V7M18 3V7M3 10h20" stroke="#5caa5c" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="8.5" y="14.5" width="3.5" height="3.5" rx="0.8" fill="#5caa5c" opacity="0.75"/>
                    </svg>
                  </div>
                  <span className="text-[0.65rem] text-body uppercase tracking-widest font-medium">Booked</span>
                </div>

              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dim" />
              <span className="text-[0.6rem] text-dim font-medium tracking-[0.1em] uppercase">Automation Flow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-container-lg mx-auto px-10 pt-16 pb-4 grid grid-cols-[22fr_78fr] gap-16 items-start mobile:grid-cols-1 mobile:gap-8 mobile:px-6 mobile:pt-10">

        <aside>
          <div className="bg-white border border-light-border rounded-xl overflow-hidden sticky top-20 mobile:static">
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">Lead Routing &amp; Tagging</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">Automated Follow-Up Sequences</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333]">Booking &amp; Calendar Integration</div>
          </div>
        </aside>

        <main>
          <h1 className="project-name">Lead Capture<br />→ Booked Call</h1>
          <p className="text-[0.82rem] text-[#999] mb-10">GoHighLevel Automation, 2024</p>

          <div className="bg-[#111] rounded-2xl px-12 py-10 mb-12">
            <h2 className="text-[0.95rem] font-semibold text-white mb-5">Outcomes</h2>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Automated 100% of the follow-up process from form submission to confirmed booking.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Reduced time-to-first-contact from 4+ hours to under 90 seconds.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Increased booked call rate by 38% through multi-touch timed sequences.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Eliminated manual calendar coordination and back-and-forth scheduling entirely.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65]">Cut no-show rate by 40% with automated day-before and 1-hour reminders.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Challenge</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">The client was running paid ads and generating leads consistently, but had no automated follow-up system in place. Sales reps were manually calling and texting hours after leads submitted — by then, most had already gone cold or booked with a competitor. Every new lead was a manual task, and the team couldn&apos;t keep up at volume.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Solution</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Built a GoHighLevel workflow triggered instantly on every new lead form submission, firing a personalized SMS and email within 90 seconds of the lead coming in — while intent was still high.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Deployed a 5-touch follow-up sequence over 72 hours for leads who didn&apos;t respond to the first contact — mixing SMS, email, and voicemail drops at optimized intervals to maximize reply rate without being aggressive.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Integrated Google Calendar so every booking confirmation automatically blocked the rep&apos;s calendar and sent the lead a confirmation with all the details they needed — no manual coordination required.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Created automated pre-call reminders sent 24 hours and 1 hour before each scheduled call — significantly reducing no-shows without any manual effort from the sales team.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">Built pipeline stage triggers so leads were automatically moved through the CRM funnel at every touchpoint — zero manual CRM updates needed, giving the team full visibility with no extra work.</p>
          </div>
        </main>

      </div>

      <WorkFooter />
    </>
  )
}
