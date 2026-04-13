export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇪🇸</span>
              <span className="text-lg font-bold text-white">
                Spanish<span className="text-primary">Prep</span>Kids
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Fun, engaging online Spanish classes for kids ages 4–12.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@spanishprepkids.com</li>
              <li>📱 @spanishprepkids</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                📸
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                👤
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors">
                🎥
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} SpanishPrepKids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
