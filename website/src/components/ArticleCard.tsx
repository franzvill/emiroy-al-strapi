import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StrapiArticle, getStrapiMedia, formatDate } from "@/lib/strapi";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  article: {
    id: number;
    attributes: StrapiArticle;
  };
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, description, slug, publishedAt, cover, author, category } = article.attributes;

  const coverUrl = cover?.data?.attributes?.url
    ? getStrapiMedia(cover.data.attributes.url)
    : '/placeholder-article.jpg';

  const authorName = author?.data?.attributes?.name || 'Anonymous';
  const categoryName = category?.data?.attributes?.name;

  return (
    <Link to={`/blog/${slug}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full group">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={coverUrl}
            alt={cover?.data?.attributes?.alternativeText || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          {categoryName && (
            <span className="text-accent text-xs font-semibold tracking-wider uppercase mb-2 inline-block">
              {categoryName}
            </span>
          )}
          <h3 className="font-playfair text-2xl font-bold group-hover:text-accent transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {authorName}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(publishedAt)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
