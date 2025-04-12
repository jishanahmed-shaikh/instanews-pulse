
import { useEffect, useState } from "react";
import { Article, editorsPicks, mostReadArticles } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener("resize", checkScreenSize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isMobile && !isVisible) {
    return (
      <Button
        className="fixed right-4 bottom-4 z-40 rounded-full shadow-lg bg-news-primary text-white"
        onClick={() => setIsVisible(true)}
      >
        Show Panel
      </Button>
    );
  }

  return (
    <aside
      className={cn(
        "w-full lg:w-80 flex-shrink-0 p-5 bg-white dark:bg-news-gray-900 shadow-md lg:shadow-none transition-all duration-300",
        isMobile && "fixed inset-y-0 right-0 z-40 overflow-y-auto",
        isMobile && !isVisible && "translate-x-full"
      )}
    >
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2 border-news-gray-200 dark:border-news-gray-800">
          Most Read Today
        </h2>
        <div className="space-y-2">
          {mostReadArticles.map((article, index) => (
            <div key={article.id} className="flex items-start gap-3">
              <span className="text-3xl font-serif text-news-gray-300 dark:text-news-gray-700 font-bold leading-none flex-shrink-0">
                {index + 1}
              </span>
              <ArticleCard article={article} variant="compact" className="py-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 border-b pb-2 border-news-gray-200 dark:border-news-gray-800">
          Editor's Picks
        </h2>
        <div className="space-y-4">
          {editorsPicks.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>

      <NewsletterSignup />
    </aside>
  );
};

export default SidePanel;
