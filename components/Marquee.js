const items = [
  'GoHighLevel', 'n8n', 'Zapier', 'Claude Code', 'Make',
  'OpenAI', 'REST APIs', 'Webhooks', 'Airtable', 'Slack',
  'HubSpot', 'Google Sheets',
]

function MarqueeSet({ ariaHidden }) {
  return (
    <div className="flex items-center gap-10 pr-10 shrink-0" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={i} className="contents">
          <span className="text-[0.75rem] font-medium text-dim tracking-[0.03em] uppercase">{item}</span>
          <span className="text-divider text-[0.6rem]">◆</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="border-t border-b border-divider py-4">
      <div className="marquee-outer">
        <div className="marquee-track">
          <MarqueeSet />
          <MarqueeSet ariaHidden="true" />
        </div>
      </div>
    </div>
  )
}
