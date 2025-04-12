
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { trendingTopics as initialTopics } from "@/data/mockData";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendingTopicsProps {
  onTopicChange?: (topicId: string) => void;
}

export const TrendingTopics = ({ onTopicChange }: TrendingTopicsProps) => {
  const [trendingTopics, setTrendingTopics] = useState(initialTopics);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleTagClick = (clickedId: string) => {
    const updatedTopics = trendingTopics.map(topic => ({
      ...topic,
      active: topic.id === clickedId
    }));
    
    setTrendingTopics(updatedTopics);
    
    if (onTopicChange) {
      onTopicChange(clickedId);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 300;
    const currentScroll = container.scrollLeft;
    
    container.scrollTo({
      left: direction === "right" 
        ? currentScroll + scrollAmount 
        : currentScroll - scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-4 border-t border-b border-news-gray-200 dark:border-news-gray-800">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Trending header */}
          <div className="flex items-center gap-2 mb-3 text-news-primary">
            <TrendingUp size={18} />
            <h2 className="text-lg font-bold">Trending Topics</h2>
          </div>

          {/* Gradient fades */}
          <div className="absolute left-0 top-[40px] bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-[40px] bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scroll buttons */}
          <div className="absolute -right-2 top-0 flex gap-1 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="h-8 w-8 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="h-8 w-8 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-800"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Scrollable topics */}
          <div 
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-none" 
            ref={scrollContainerRef}
          >
            {trendingTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTagClick(topic.id)}
                className={cn(
                  "trending-tag",
                  topic.active && "active"
                )}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
