import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section id="collection" className="py-32 bg-gradient-to-b from-background to-luxury-charcoal/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Limited Edition</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              The Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Each timepiece is a tribute to legendary clubs, crafted with Swiss precision and adorned with iconic team colors. Limited to 100 pieces per edition.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      <footer className="bg-luxury-dark text-white py-16 mt-32 border-t border-luxury-gold/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="font-playfair text-3xl md:text-4xl mb-3">
              Kick Off <span className="bg-gradient-gold bg-clip-text text-transparent">Couture</span>
            </p>
            <p className="text-luxury-silver text-sm tracking-wider">Where football passion meets horological excellence</p>
          </div>
          <div className="border-t border-luxury-gold/10 pt-8 text-center">
            <p className="text-xs text-muted-foreground">© 2025 Kick Off Couture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
