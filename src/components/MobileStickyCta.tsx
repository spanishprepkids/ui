export default function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href="#book"
        className="flex items-center justify-center bg-primary hover:bg-primary-dark text-on-primary font-semibold px-5 py-3 rounded-xl text-sm"
      >
        Try a free 25-minute class
      </a>
    </div>
  );
}
