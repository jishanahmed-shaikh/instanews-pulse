
import { useState, useEffect } from "react";
import { Article } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Bookmark, BookmarkCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export const ArticleCard = ({ 
  article, 
  variant = "default", 
  className 
}: ArticleCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Check if article is bookmarked on component mount
  useEffect(() => {
    const bookmarksJson = localStorage.getItem('bookmarks');
    if (bookmarksJson) {
      const bookmarks = JSON.parse(bookmarksJson);
      setIsBookmarked(bookmarks.includes(article.id));
    }
  }, [article.id]);
  
  // Get category color based on name
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "World": "bg-blue-500",
      "Politics": "bg-red-500",
      "Business": "bg-green-500",
      "Tech": "bg-purple-500",
      "Sports": "bg-orange-500",
      "Entertainment": "bg-pink-500",
      "Health": "bg-teal-500",
    };
    return colors[category] || "bg-gray-500";
  };
  
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to article page
    
    let bookmarks: string[] = [];
    const bookmarksJson = localStorage.getItem('bookmarks');
    
    if (bookmarksJson) {
      bookmarks = JSON.parse(bookmarksJson);
    }
    
    if (isBookmarked) {
      // Remove from bookmarks
      bookmarks = bookmarks.filter(id => id !== article.id);
      toast({
        title: "Removed from bookmarks",
        description: `"${article.title}" has been removed from your bookmarks.`
      });
    } else {
      // Add to bookmarks
      bookmarks.push(article.id);
      toast({
        title: "Added to bookmarks",
        description: `"${article.title}" has been added to your bookmarks.`
      });
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  if (variant === "compact") {
    return (
      <div className={cn("flex gap-3 py-3 group", className)}>
        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <span className={cn("category-tag mb-2", getCategoryColor(article.category))}>
            {article.category}
          </span>
          <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-news-primary transition-colors">
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </h3>
          <div className="time-stamp flex items-center text-xs text-news-gray-500">
            <Clock size={12} className="mr-1" />
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className={cn("relative group overflow-hidden rounded-lg", className)}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <span className={cn("category-tag mb-2", getCategoryColor(article.category))}>
            {article.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </h3>
          <p className="text-white/90 mb-3 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm text-white font-medium">{article.author.name}</p>
                <div className="flex items-center text-white/70 text-xs gap-1">
                  <Clock size={12} />
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </div>
            <button 
              className="text-white/80 hover:text-white" 
              aria-label={isBookmarked ? "Remove from bookmarks" : "Bookmark article"}
              onClick={handleBookmark}
            >
              {isBookmarked ? (
                <BookmarkCheck size={18} className="fill-current" />
              ) : (
                <Bookmark size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <div className={cn("article-card group bg-white dark:bg-news-gray-900 rounded-lg shadow-sm overflow-hidden", className)}>
      <div className="overflow-hidden h-48">
        <img 
          src={article.image} 
          alt={article.title} 
          className="article-image h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={cn("category-tag", getCategoryColor(article.category))}>
            {article.category}
          </span>
          <button 
            className={`text-news-gray-400 hover:text-news-accent ${isBookmarked ? 'text-news-primary' : ''}`} 
            aria-label={isBookmarked ? "Remove from bookmarks" : "Bookmark article"}
            onClick={handleBookmark}
          >
            {isBookmarked ? (
              <BookmarkCheck size={16} className="fill-current" />
            ) : (
              <Bookmark size={16} />
            )}
          </button>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-news-primary transition-colors">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="text-news-gray-600 dark:text-news-gray-400 text-sm mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>
          <div className="time-stamp flex items-center text-xs text-news-gray-500">
            <Clock size={12} className="mr-1" />
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
