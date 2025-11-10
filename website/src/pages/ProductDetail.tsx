import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByHandle } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ShoppingCart, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const fetchedProduct = await getProductByHandle(handle);
        setProduct(fetchedProduct);
        setSelectedVariant(fetchedProduct?.variants?.edges[0]?.node);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!selectedVariant || !product) {
      toast.error("Please select a variant");
      return;
    }

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart`,
    });
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-muted-foreground text-lg mb-4">Product not found</p>
          <Link to="/">
            <Button>Return to Collection</Button>
          </Link>
        </div>
      </>
    );
  }

  const images = product.images?.edges || [];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-border">
                {images[selectedImage] && (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-accent' : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || product.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="font-playfair text-4xl font-bold mb-4">
                {product.title}
              </h1>
              
              <p className="text-3xl font-bold text-accent mb-6">
                {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount).toFixed(2)}
              </p>

              <div className="prose prose-sm mb-8 text-muted-foreground">
                <p>{product.description}</p>
              </div>

              {product.variants?.edges.length > 1 && (
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">
                    Select Option
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((variant: any) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariant?.id === variant.node.id ? "default" : "outline"}
                        onClick={() => setSelectedVariant(variant.node)}
                        className={selectedVariant?.id === variant.node.id ? "bg-accent" : ""}
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
