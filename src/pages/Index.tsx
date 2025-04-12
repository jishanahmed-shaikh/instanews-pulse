
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingTopics from "@/components/TrendingTopics";
import SidePanel from "@/components/SidePanel";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Article, latestArticles, trendingArticles, articles } from "@/data/mockData";
import { Bookmark, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>(latestArticles);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(9); // Initial number of articles to show
  const location = useLocation();
  
  // Parse URL parameters on component mount and when URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const topic = searchParams.get('topic');
    
    if (category) {
      setSelectedCategory(category);
      setSelectedTopic(null); // Reset topic if category is selected
    } else if (topic) {
      setSelectedTopic(topic);
      setSelectedCategory(null); // Reset category if topic is selected
    } else {
      // If neither category nor topic is specified, show latest articles
      setSelectedCategory(null);
      setSelectedTopic(null);
    }
    
    // Reset visible articles count when filter changes
    setVisibleArticles(9);
  }, [location]);

  // Filter articles based on selected topic or category
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call with delay
    const timer = setTimeout(() => {
      let filtered = [...articles];
      
      if (selectedTopic) {
        filtered = filtered.filter(article => 
          article.tags?.includes(selectedTopic)
        );
      } else if (selectedCategory) {
        filtered = filtered.filter(article => 
          article.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      } else {
        filtered = latestArticles;
      }
      
      setDisplayedArticles(filtered.length > 0 ? filtered : []);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [selectedTopic, selectedCategory]);

  const handleTopicChange = (topicId: string) => {
    const newTopicId = topicId === selectedTopic ? null : topicId;
    setSelectedTopic(newTopicId);
    setSelectedCategory(null);
    
    // Update URL with topic parameter
    const url = new URL(window.location.href);
    if (newTopicId) {
      url.searchParams.set('topic', newTopicId);
      url.searchParams.delete('category');
    } else {
      url.searchParams.delete('topic');
    }
    window.history.pushState({}, '', url.toString());
  };

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <TrendingTopics onTopicChange={handleTopicChange} />
      
      <main className="flex-grow bg-gradient-to-b from-white to-news-gray-50 dark:from-news-gray-950 dark:to-news-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} News` : 
                   selectedTopic ? `#${selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)} Stories` : 
                   "Latest News"}
                </h2>
                
                {isLoading && (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-news-primary border-t-transparent rounded-full"></div>
                    <span className="text-sm text-news-gray-500">Loading...</span>
                  </div>
                )}
              </div>
              
              {displayedArticles.length === 0 ? (
                <div className="text-center py-12 bg-white dark:bg-news-gray-900 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-news-gray-500">Try selecting a different topic or category</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {displayedArticles.slice(0, visibleArticles).map((article) => (
                      <div key={article.id} className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <ArticleCard key={article.id} article={article} className="h-full transform transition-transform duration-300 hover:scale-[1.01]" />
                      </div>
                    ))}
                  </div>
                  
                  {visibleArticles < displayedArticles.length && (
                    <div className="flex justify-center mt-8">
                      <Button 
                        onClick={loadMoreArticles} 
                        variant="outline"
                        className="group"
                      >
                        Load More
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <SidePanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
