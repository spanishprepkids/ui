import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Lessons from "@/components/Lessons";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Lessons />
      <HowItWorks />
      <About />
      <Testimonials />
      <Pricing />
      <Booking />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
