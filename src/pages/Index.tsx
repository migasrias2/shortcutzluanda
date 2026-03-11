import { Navbar } from "@/components/Navbar";
import { PromoSlider } from "@/components/PromoSlider";
import { SectionSlider } from "@/components/SectionSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <PromoSlider />
        <SectionSlider title="Upcoming" />
      </main>
      <footer className="py-8 bg-black border-t border-white/10 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shortcutz Luanda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
