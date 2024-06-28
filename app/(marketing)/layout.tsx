import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";


const MarketingLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="h-min-full bg-black">
      <main className=" pt-32 pb-20">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
