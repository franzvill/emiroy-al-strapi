import { ShopifyProduct } from "./shopify";

export const MOCK_PRODUCTS: ShopifyProduct[] = [
  {
    node: {
      id: "mock-1",
      title: "Real Madrid Legends Watch",
      description: "A tribute to the legendary Los Blancos. Limited to 100 pieces.",
      handle: "real-madrid-legends",
      priceRange: {
        minVariantPrice: {
          amount: "2499.00",
          currencyCode: "EUR"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
              altText: "Real Madrid Legends Watch"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "variant-1",
              title: "Default",
              price: {
                amount: "2499.00",
                currencyCode: "EUR"
              },
              availableForSale: true,
              selectedOptions: []
            }
          }
        ]
      },
      options: []
    }
  },
  {
    node: {
      id: "mock-2",
      title: "FC Barcelona Heritage Watch",
      description: "Celebrating the Blaugrana legacy. Swiss precision meets Catalan pride.",
      handle: "barcelona-heritage",
      priceRange: {
        minVariantPrice: {
          amount: "2599.00",
          currencyCode: "EUR"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
              altText: "FC Barcelona Heritage Watch"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "variant-2",
              title: "Default",
              price: {
                amount: "2599.00",
                currencyCode: "EUR"
              },
              availableForSale: true,
              selectedOptions: []
            }
          }
        ]
      },
      options: []
    }
  },
  {
    node: {
      id: "mock-3",
      title: "Manchester United Classic",
      description: "The Red Devils' glory captured in horological excellence.",
      handle: "manchester-united-classic",
      priceRange: {
        minVariantPrice: {
          amount: "2399.00",
          currencyCode: "EUR"
        }
      },
      images: {
        edges: [
          {
            node: {
              url: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800",
              altText: "Manchester United Classic Watch"
            }
          }
        ]
      },
      variants: {
        edges: [
          {
            node: {
              id: "variant-3",
              title: "Default",
              price: {
                amount: "2399.00",
                currencyCode: "EUR"
              },
              availableForSale: true,
              selectedOptions: []
            }
          }
        ]
      },
      options: []
    }
  }
];
