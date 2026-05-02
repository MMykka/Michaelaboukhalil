import Link from 'next/link'
import WorkNavbar from '@/components/WorkNavbar'
import WorkFooter from '@/components/WorkFooter'

export const metadata = {
  title: 'Event Data Monetization SaaS Platform — Michael Abou Khalil',
}

export default function ClientOnboardingPage() {
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
            We built a SaaS platform that turns stale event attendee data into an active revenue channel — enabling businesses to retarget, convert, and track performance in real time.
          </p>
        </div>
        <div className="overflow-hidden rounded-[14px] mobile:min-h-60">
          <div className="w-full h-full min-h-[410px] relative overflow-hidden" style={{background:'#13131a'}}>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',backgroundSize:'28px 28px'}} />
            <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, #13131a 100%)'}} />
            <div className="absolute top-6 right-7 text-[0.65rem] font-mono text-dim tracking-widest">02</div>

            {/* Dashboard metrics */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="grid grid-cols-3 gap-3 w-full max-w-[520px]">
                <div className="bg-[#18181b] border border-[#2a2a30] rounded-2xl p-5">
                  <div className="text-[0.58rem] text-dim uppercase tracking-wider mb-3">Total Attendees</div>
                  <div className="text-[1.6rem] font-semibold text-body leading-none">2.4K</div>
                </div>
                <div className="bg-[#18181b] border border-[#2a2a30] rounded-2xl p-5">
                  <div className="text-[0.58rem] text-dim uppercase tracking-wider mb-3">Converted</div>
                  <div className="text-[1.6rem] font-semibold text-subtle leading-none">23%</div>
                </div>
                <div className="bg-[#18181b] border border-[#2a2a30] rounded-2xl p-5">
                  <div className="text-[0.58rem] text-dim uppercase tracking-wider mb-3">Leads Generated</div>
                  <div className="text-[1.6rem] font-semibold text-body leading-none">552</div>
                </div>
                <div className="col-span-2 bg-[#18181b] border border-[#2a2a30] rounded-2xl p-5">
                  <div className="text-[0.58rem] text-dim uppercase tracking-wider mb-3">Revenue / mo</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[1.6rem] font-semibold text-body leading-none">$12.4K</span>
                    <span className="text-[0.65rem] text-muted">+18% MoM</span>
                  </div>
                </div>
                <div className="bg-[#18181b] border border-[#2a2a30] rounded-2xl p-5">
                  <div className="text-[0.58rem] text-dim uppercase tracking-wider mb-3">Events</div>
                  <div className="text-[1.6rem] font-semibold text-subtle leading-none">14</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dim" />
              <span className="text-[0.6rem] text-dim font-medium tracking-[0.1em] uppercase">SaaS Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-container-lg mx-auto px-10 pt-16 pb-4 grid grid-cols-[22fr_78fr] gap-16 items-start mobile:grid-cols-1 mobile:gap-8 mobile:px-6 mobile:pt-10">

        <aside>
          <div className="bg-white border border-light-border rounded-xl overflow-hidden sticky top-20 mobile:static">
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">Event Retargeting Engine</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">Lead Generation &amp; Qualification</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333]">Real-Time Performance Dashboard</div>
          </div>
        </aside>

        <main>
          <h1 className="project-name">Event Data<br />Monetization</h1>
          <p className="text-[0.82rem] text-[#999] mb-10">SaaS Platform, n8n + GoHighLevel, 2024</p>

          <div className="bg-[#111] rounded-2xl px-12 py-10 mb-12">
            <h2 className="text-[0.95rem] font-semibold text-white mb-5">Outcomes</h2>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Generated $12.4K/month in new revenue from attendee data that was previously sitting unused.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Converted 23% of past event attendees into qualified leads within the first 30 days.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Processed 2,400+ attendee records across 14 events with zero manual data work.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Reduced cost-per-lead by 60% compared to running fresh paid ad campaigns.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65]">Delivered a real-time dashboard giving clients full visibility into retargeting performance, pipeline status, and revenue attribution.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Challenge</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">Event organizers and B2B businesses were sitting on thousands of attendee records after every conference, expo, or webinar — and doing nothing with them. The data was collected, exported to a spreadsheet, and forgotten. There was no system to retarget those attendees, no way to identify which ones were high-intent buyers, and no infrastructure to turn that list into actual revenue. Every event was a missed monetization opportunity.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Solution</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Built a SaaS platform that ingests raw event attendee data — from spreadsheets, registration tools, or direct API exports — and immediately begins enriching and segmenting each contact based on job title, company size, engagement signals, and event type.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Deployed an automated retargeting engine via GoHighLevel that launches personalized multi-touch sequences to each segment — email, SMS, and voicemail drops — timed and tailored based on how recently and how often the attendee engaged with previous events.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Integrated an AI qualification layer using n8n that scores each lead as contacts reply or click through — automatically routing hot leads to a booking flow and nurturing warm leads with follow-up content, without any manual review required.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Connected the entire pipeline to a real-time performance dashboard showing attendees processed, sequences active, leads generated, calls booked, and revenue attributed — giving clients full visibility into ROI from each event&apos;s data.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">Built the platform as a multi-tenant SaaS product so multiple event clients could run their own retargeting campaigns simultaneously — each with isolated data, their own branding in outreach, and independent reporting.</p>
          </div>
        </main>

      </div>

      <WorkFooter />
    </>
  )
}
