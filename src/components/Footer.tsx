import {
  LuFacebook,
  LuInstagram,
  LuMail,
  LuSmartphone,
  LuYoutube,
} from "react-icons/lu";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary/70 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <BrandLogo size="md" />
            </a>
            <p className="text-sm leading-relaxed">
              Fun, engaging online Spanish classes for kids ages 4–12.
            </p>
          </div>

          <div>
            <h4 className="text-on-primary font-medium mb-4 text-xs uppercase tracking-[0.12em]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#benefits"
                  className="hover:text-secondary transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-secondary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-secondary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="hover:text-secondary transition-colors"
                >
                  Book a Trial
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-secondary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-on-primary font-medium mb-4 text-xs uppercase tracking-[0.12em]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <LuMail className="w-4 h-4 shrink-0" />
               <a href="mailto:hello@spanishprepkids.com">hello@spanishprepkids.com</a>
              </li>
              <li className="flex items-center gap-2">
                <LuSmartphone className="w-4 h-4 shrink-0" />
                @spanishprepkids
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-on-primary font-medium mb-4 text-xs uppercase tracking-[0.12em]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-secondary transition-colors"
              >
                <LuInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-secondary transition-colors"
              >
                <LuFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-secondary transition-colors"
              >
                <LuYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-on-primary/10 text-center text-sm text-on-primary/40">
          © {new Date().getFullYear()} SpanishPrepKids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
