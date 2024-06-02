import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-min-full bg-slate-800">
      {/* <BackgroundBeams className="absolute inset-0 z-0" /> */}
      <main className="pt-40 pb-20">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
