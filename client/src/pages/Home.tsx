import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home Page - Garimpei Shop Landing Page
 * Design Philosophy: Modern Dark Elegance with Playful Elements
 * 
 * Layout Structure:
 * 1. Header - Creative animated logo with navigation
 * 2. Hero Section - Bold title, emojis, main CTA
 * 3. Features Section - Three main benefits with cards
 * 4. CTA Section - Strong call-to-action for WhatsApp
 * 5. Footer - Contact info and social links
 * 
 * Color Scheme:
 * - Background: Deep dark (#0a0a0a)
 * - Primary Accent: Orange (#ff6b35)
 * - Secondary: Pink (#ff6b9d), Green (#2ecc71)
 * - Text: White/Light gray
 * 
 * Typography:
 * - Display: Poppins (bold, 700)
 * - Body: Inter (regular, 400-500)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}
      <HeroSection />
      {/* <FeaturesSection /> */}
      {/* <CTASection /> */}
      {/* <Footer /> */}
    </div>
  );
}
