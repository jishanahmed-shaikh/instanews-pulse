
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Article, articles } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";
import { Bookmark, Filter, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Bookmarks = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "az" | "za">("newest");
  
  useEffect(() => {
    // Simulate loading bookmarks
    setTimeout(() => {
      // Get 8 random articles as bookmarks for demo purposes
      const randomArticles = [...articles]
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
      
      setBookmarkedArticles(randomArticles);
      setFilteredArticles(randomArticles);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  useEffect(() => {
    let result = [...bookmarkedArticles];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(article => article.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        article => 
          article.title.toLowerCase().includes(query) || 
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortOrder) {
      case "newest":
        // This is mock data, so we'll just reverse the array to simulate "newest first"
        result = [...result].reverse();
        break;
      case "oldest":
        // No sorting needed as this is the default order in our mock data
        break;
      case "az":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    
    setFilteredArticles(result);
  }, [bookmarkedArticles, searchQuery, selectedCategory, sortOrder]);
  
  const handleRemoveBookmark = (articleId: string) => {
    setBookmarkedArticles(prev => prev.filter(article => article.id !== articleId));
    
    toast({
      title: "Bookmark removed",
      description: "The article has been removed from your bookmarks.",
    });
  };
  
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSortOrder("newest");
  };
  
  const getUniqueCategories = () => {
    const categories = bookmarkedArticles.map(article => article.category);
    return Array.from(new Set(categories));
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
          <span className="ml-2">Loading bookmarks...</span>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Bookmarks</h1>
                <p className="text-news-gray-600 dark:text-news-gray-400">
                  {bookmarkedArticles.length} {bookmarkedArticles.length === 1 ? 'article' : 'articles'} bookmarked
                </p>
              </div>
              
              <div className="flex gap-2 mt-4 md:mt-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                      All Categories
                    </DropdownMenuItem>
                    {getUniqueCategories().map(category => (
                      <DropdownMenuItem 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-primary/10" : ""}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => setSortOrder("newest")}
                      className={sortOrder === "newest" ? "bg-primary/10" : ""}
                    >
                      Newest First
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSortOrder("oldest")}
                      className={sortOrder === "oldest" ? "bg-primary/10" : ""}
                    >
                      Oldest First
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSortOrder("az")}
                      className={sortOrder === "az" ? "bg-primary/10" : ""}
                    >
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSortOrder("za")}
                      className={sortOrder === "za" ? "bg-primary/10" : ""}
                    >
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-news-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search your bookmarks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-news-gray-400 hover:text-news-gray-600"
                  onClick={() => setSearchQuery("")}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            {/* Active filters */}
            {(searchQuery || selectedCategory || sortOrder !== "newest") && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <div className="bg-news-gray-100 dark:bg-news-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="mr-2">Search: {searchQuery}</span>
                    <button onClick={() => setSearchQuery("")}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {selectedCategory && (
                  <div className="bg-news-gray-100 dark:bg-news-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="mr-2">Category: {selectedCategory}</span>
                    <button onClick={() => setSelectedCategory(null)}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {sortOrder !== "newest" && (
                  <div className="bg-news-gray-100 dark:bg-news-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="mr-2">
                      Sort: {
                        sortOrder === "az" ? "A-Z" :
                        sortOrder === "za" ? "Z-A" :
                        sortOrder === "oldest" ? "Oldest First" : "Newest First"
                      }
                    </span>
                    <button onClick={() => setSortOrder("newest")}>
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                <button 
                  className="text-news-primary hover:underline text-sm"
                  onClick={clearAllFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map(article => (
                  <div key={article.id} className="relative bg-white dark:bg-news-gray-900 rounded-lg shadow-sm overflow-hidden">
                    <ArticleCard article={article} />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 bg-white/80 dark:bg-news-gray-900/80 hover:bg-white dark:hover:bg-news-gray-900 shadow-sm"
                      onClick={() => handleRemoveBookmark(article.id)}
                    >
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-news-gray-900 rounded-lg shadow-sm">
                <Bookmark className="h-12 w-12 mx-auto text-news-gray-300 mb-4" />
                
                {bookmarkedArticles.length === 0 ? (
                  <>
                    <h3 className="text-xl font-medium mb-2">No bookmarks yet</h3>
                    <p className="text-news-gray-500 mb-6">
                      You haven't bookmarked any articles yet. Click the bookmark icon on any article to save it for later.
                    </p>
                    <Button onClick={() => window.location.href = "/"}>
                      Browse Articles
                    </Button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-medium mb-2">No matching bookmarks</h3>
                    <p className="text-news-gray-500 mb-6">
                      No bookmarks match your current filters.
                    </p>
                    <Button variant="outline" onClick={clearAllFilters}>
                      Clear All Filters
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookmarks;
