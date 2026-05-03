import Link from 'next/link'
import WorkNavbar from '@/components/WorkNavbar'
import WorkFooter from '@/components/WorkFooter'

export const metadata = {
  title: 'Multi-Platform Data Sync — Michael Abou Khalil',
  description: 'Real-time data synchronization across CRMs, spreadsheets, and tools — eliminating manual entry and ensuring accurate, centralized business data across every platform.',
  alternates: { canonical: '/work/data-sync' },
  openGraph: {
    title: 'Multi-Platform Data Sync — Michael Abou Khalil',
    description: 'Real-time sync across CRMs, spreadsheets, and tools — eliminating manual entry and keeping business data accurate everywhere.',
    url: '/work/data-sync',
    images: [{ url: '/card-3-data-sync.png', alt: 'Multi-Platform Data Sync automation' }],
  },
}

export default function DataSyncPage() {
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
            We connected a fragmented tool stack into a single source of truth — syncing data across CRM, spreadsheets, and communication tools in real time, with zero manual input.
          </p>
        </div>
        <div className="overflow-hidden rounded-[14px] mobile:min-h-60">
          <div className="w-full h-full min-h-[410px] relative overflow-hidden" style={{background:'#13131a'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
            <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, #13131a 100%)'}} />
            <div className="absolute top-6 right-7 text-[0.65rem] font-mono text-dim tracking-widest">03</div>

            {/* Hub and spoke — expanded */}
            <div className="absolute inset-0 flex items-center justify-center gap-6">

              {/* Left: sources */}
              <div className="flex flex-col gap-3">
                {[['HubSpot','bg-muted'],['Sheets','bg-muted'],['Airtable','bg-muted'],['Notion','bg-muted']].map(([label]) => (
                  <div key={label} className="bg-[#18181b] border border-[#2a2a30] rounded-xl px-4 py-2.5 flex items-center gap-2.5 min-w-[100px]">
                    <div className="w-2 h-2 rounded-full bg-muted shrink-0" />
                    <span className="text-[0.68rem] text-muted font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Arrows in */}
              <div className="flex flex-col gap-5">
                {[0,1,2,3].map(i => (
                  <svg key={i} width="44" height="8" viewBox="0 0 44 8" fill="none">
                    <path d="M0 4h38M34 1.5l5 2.5-5 2.5" stroke="#2a2a38" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ))}
              </div>

              {/* Center hub */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-[#18181b] border border-[#2a2a48] flex items-center justify-center" style={{boxShadow:'0 0 32px rgba(70,70,170,0.18)'}}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M4 8C5.5 4.5 9 3 13 3c4.5 0 8 3.5 8 8" stroke="#7070b0" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M22 18C20.5 21.5 17 23 13 23c-4.5 0-8-3.5-8-8" stroke="#7070b0" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M18.5 4.5l3.5 5M7.5 21.5L4 16.5" stroke="#7070b0" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-[0.58rem] text-dim uppercase tracking-widest font-medium">Sync</span>
              </div>

              {/* Arrows out */}
              <div className="flex flex-col gap-5" style={{marginTop:'-32px'}}>
                {[0,1,2].map(i => (
                  <svg key={i} width="44" height="8" viewBox="0 0 44 8" fill="none">
                    <path d="M0 4h38M34 1.5l5 2.5-5 2.5" stroke="#2a2a38" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ))}
              </div>

              {/* Right: destinations */}
              <div className="flex flex-col gap-3" style={{marginTop:'-32px'}}>
                {[['Slack','bg-subtle'],['GHL','bg-subtle'],['API','bg-subtle']].map(([label]) => (
                  <div key={label} className="bg-[#18181b] border border-[#2a2a30] rounded-xl px-4 py-2.5 flex items-center gap-2.5 min-w-[100px]">
                    <div className="w-2 h-2 rounded-full bg-subtle shrink-0" />
                    <span className="text-[0.68rem] text-subtle font-medium">{label}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="absolute bottom-6 left-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-dim" />
              <span className="text-[0.6rem] text-dim font-medium tracking-[0.1em] uppercase">Data Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-container-lg mx-auto px-10 pt-16 pb-4 grid grid-cols-[22fr_78fr] gap-16 items-start mobile:grid-cols-1 mobile:gap-8 mobile:px-6 mobile:pt-10">

        <aside>
          <div className="bg-white border border-light-border rounded-xl overflow-hidden sticky top-20 mobile:static">
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">CRM &amp; Pipeline Sync</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333] border-b border-[#f0f0f2]">Spreadsheet Automation</div>
            <div className="px-5 py-[0.85rem] text-[0.8rem] text-[#333]">API &amp; Webhook Integrations</div>
          </div>
        </aside>

        <main>
          <h1 className="project-name">Multi-Platform<br />Data Sync</h1>
          <p className="text-[0.82rem] text-[#999] mb-10">n8n + REST API Integration, 2024</p>

          <div className="bg-[#111] rounded-2xl px-12 py-10 mb-12">
            <h2 className="text-[0.95rem] font-semibold text-white mb-5">Outcomes</h2>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Achieved real-time two-way sync across 4 platforms with zero manual data entry.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Eliminated duplicate records and data discrepancies across the entire tool stack.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Saved the team 15+ hrs/week previously spent on manual updates and reconciliation.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65] mb-4">Built-in error handling with retry logic and alert emails on failed syncs.</p>
            <p className="text-[0.82rem] text-[#bbb] leading-[1.65]">Full audit trail and sync health visibility maintained across all connected tools.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Challenge</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">The client&apos;s team was maintaining the same data manually across a CRM, a Google Sheet, a project management tool, and Slack. Every deal update had to be entered in four separate places. Discrepancies were constant, reconciliation was a weekly ritual, and the team had no reliable way to know which system was actually accurate at any given moment.</p>
          </div>

          <div className="mb-14">
            <h2 className="text-[1rem] font-semibold text-black mb-5">Solution</h2>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Built an n8n workflow that listened for changes across all connected platforms via webhooks, triggering real-time sync jobs whenever data changed in any system — so every platform stayed current without anyone touching it.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Created a two-way sync between HubSpot CRM and Google Sheets — deal updates made in either direction were reflected across both within seconds, with no manual export or import required.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Automated Slack notifications on key pipeline events — new deal created, stage changed, deal closed — keeping the entire team informed without any manual reporting or status updates.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75] mb-[0.85rem]">Added error-catching nodes throughout the workflow with retry logic and automatic alert emails to the admin whenever a sync failed, so nothing slipped through silently and issues were caught before they compounded.</p>
            <p className="text-[0.82rem] text-[#333] leading-[1.75]">Used REST API calls to push and pull data from tools that lacked native n8n integrations, making every platform in the stack part of the same connected, automated system.</p>
          </div>
        </main>

      </div>

      <WorkFooter />
    </>
  )
}
