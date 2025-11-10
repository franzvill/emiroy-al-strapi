import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { getArticleBySlug, StrapiSingleResponse, StrapiArticle, getStrapiMedia, formatDate } from "@/lib/strapi";
import { Loader2, ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<StrapiSingleResponse<StrapiArticle> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      setIsLoading(true);
      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

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

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-muted-foreground text-lg mb-4">Article not found</p>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </>
    );
  }

  const { title, description, publishedAt, cover, author, category, blocks } = article.data.attributes;

  const coverUrl = cover?.data?.attributes?.url
    ? getStrapiMedia(cover.data.attributes.url)
    : null;

  const authorName = author?.data?.attributes?.name || 'Anonymous';
  const categoryName = category?.data?.attributes?.name;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {categoryName && (
            <span className="text-accent text-xs font-semibold tracking-wider uppercase mb-4 inline-block">
              {categoryName}
            </span>
          )}

          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {authorName}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(publishedAt)}
            </span>
          </div>

          {coverUrl && (
            <div className="aspect-video rounded-lg overflow-hidden mb-12">
              <img
                src={coverUrl}
                alt={cover?.data?.attributes?.alternativeText || title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {blocks && blocks.length > 0 && (
            <div className="prose prose-lg max-w-none">
              {blocks.map((block: any, index: number) => {
                // Render different block types
                switch (block.__component) {
                  case 'shared.rich-text':
                    return (
                      <div
                        key={index}
                        className="mb-8"
                        dangerouslySetInnerHTML={{ __html: block.body }}
                      />
                    );
                  case 'shared.quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-accent pl-6 py-4 my-8 italic text-lg">
                        <p className="mb-2">{block.body}</p>
                        {block.title && (
                          <footer className="text-sm text-muted-foreground not-italic">
                            — {block.title}
                          </footer>
                        )}
                      </blockquote>
                    );
                  case 'shared.media':
                    const mediaUrl = block.file?.data?.attributes?.url
                      ? getStrapiMedia(block.file.data.attributes.url)
                      : null;
                    return mediaUrl ? (
                      <figure key={index} className="my-8">
                        <img
                          src={mediaUrl}
                          alt={block.file?.data?.attributes?.alternativeText || ''}
                          className="rounded-lg w-full"
                        />
                      </figure>
                    ) : null;
                  case 'shared.slider':
                    return (
                      <div key={index} className="grid grid-cols-2 gap-4 my-8">
                        {block.files?.data?.map((file: any, idx: number) => (
                          <img
                            key={idx}
                            src={getStrapiMedia(file.attributes.url)}
                            alt={file.attributes.alternativeText || ''}
                            className="rounded-lg w-full"
                          />
                        ))}
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          )}

          <div className="mt-16 pt-8 border-t">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-luxury-dark text-white py-16 border-t border-luxury-gold/20">
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

export default ArticlePage;
