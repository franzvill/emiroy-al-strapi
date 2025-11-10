import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles, StrapiResponse, StrapiArticle } from "@/lib/strapi";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [articles, setArticles] = useState<StrapiResponse<StrapiArticle> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const data = await getArticles(currentPage, 9);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-32 bg-gradient-to-b from-luxury-charcoal/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Insights & Stories</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              The Blog
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Discover the stories behind the timepieces, the legends that inspire them, and the craftsmanship that brings them to life.
            </p>
          </div>

          {articles && articles.data.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {articles.data.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {articles.meta.pagination.pageCount > 1 && (
                <div className="flex justify-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="flex items-center px-4 text-sm text-muted-foreground">
                    Page {articles.meta.pagination.page} of {articles.meta.pagination.pageCount}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === articles.meta.pagination.pageCount}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No articles found</p>
              <p className="text-sm text-muted-foreground">
                Check back soon for new content!
              </p>
            </div>
          )}
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

export default Blog;
