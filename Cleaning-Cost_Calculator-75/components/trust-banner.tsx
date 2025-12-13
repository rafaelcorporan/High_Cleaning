export function TrustBanner() {
  return (
    <section className="border-t border-border bg-card/50 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#2E8B57]" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Priced at $25/hr</span> (NJ standard) × staff × hours + 28%
              ops. <span className="text-[#2E8B57] font-medium">No hidden fees.</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>NJ Licensed</span>
            <span className="hidden sm:inline">•</span>
            <span>ISSA Certified</span>
            <span className="hidden sm:inline">•</span>
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    </section>
  )
}
