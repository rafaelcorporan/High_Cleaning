export function Watermark() {
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <div className="px-3 py-1.5 rounded-md bg-[#E6F0FA]/5 border border-[#E6F0FA]/10 backdrop-blur-sm">
        <span className="text-xs font-medium tracking-wider text-[#E6F0FA]/40 uppercase">#MADEINCOR</span>
      </div>
    </div>
  )
}
