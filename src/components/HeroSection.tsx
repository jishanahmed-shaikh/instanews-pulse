
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ArticleCard";
import { Article, featuredArticles } from "@/data/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const mainFeatured = featuredArticles[currentSlide];
  const secondaryFeatured = featuredArticles.slice(0, 3).filter((_, i) => i !== currentSlide);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
    
    // Re-enable autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + featuredArticles.length) % featuredArticles.length);
  };

  return (
    <section className="pt-6 pb-10 bg-gradient-to-b from-news-gray-50 to-white dark:from-news-gray-900 dark:to-news-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main featured article */}
          <div className="lg:w-7/12 relative h-[500px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <Link to={`/article/${mainFeatured.id}`} className="block h-full">
              <ArticleCard article={mainFeatured} variant="featured" className="h-full transform transition-transform duration-300 hover:scale-[1.01]" />
            </Link>
            
            {/* Slider controls */}
            <div className="absolute bottom-4 right-4 z-30 flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-black/20 border-white/20 hover:bg-black/40 text-white rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-black/20 border-white/20 hover:bg-black/40 text-white rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-4 z-30 flex gap-1">
              {featuredArticles.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-4" : "bg-white/40"
                  }`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Secondary featured articles */}
          <div className="lg:w-5/12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryFeatured.map((article) => (
              <div key={article.id} className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Link to={`/article/${article.id}`} className="block h-full">
                  <ArticleCard key={article.id} article={article} className="h-full transform transition-transform duration-300 hover:scale-[1.01]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
