
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import ArticleCard from "@/components/ArticleCard";
import { Article, articles, categories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"newest" | "relevance">("relevance");
  
  useEffect(() => {
    // Reset search input and selected categories when query changes
    setSearchInput(query);
    setSelectedCategories([]);
    setIsLoading(true);
    
    // Simulate API call with delay
    const timer = setTimeout(() => {
      if (query) {
        // Filter articles based on search query
        const filteredArticles = articles.filter(article => 
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          article.content.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase()) ||
          article.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        
        // Sort by "relevance" - in a real app this would use a more sophisticated algorithm
        setSearchResults(filteredArticles);
      } else {
        setSearchResults([]);
      }
      
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  useEffect(() => {
    // Apply category filters and sorting
    if (!query) return;
    
    let filtered = [...articles].filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(article => selectedCategories.includes(article.category));
    }
    
    // Apply sorting
    if (sortOrder === "newest") {
      // In a real app, we would sort by actual date
      // Here we're just reversing the array for demo purposes
      filtered = [...filtered].reverse();
    }
    
    setSearchResults(filtered);
  }, [selectedCategories, sortOrder]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      // Update the URL with the new search query
      setSearchParams({ q: searchInput.trim() });
    }
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSortOrder("relevance");
  };
  
  const getCategoryCount = (category: string) => {
    return searchResults.filter(article => article.category === category).length;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="mb-8">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-news-gray-400" size={18} />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="pl-10 pr-10"
                    />
                    {searchInput && (
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-news-gray-400 hover:text-news-gray-600"
                        onClick={() => setSearchInput("")}
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                  <Button type="submit">
                    Search
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={18} />
                  </Button>
                </form>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    {query ? (
                      <>
                        Search results for <span className="text-news-primary">"{query}"</span>
                      </>
                    ) : (
                      "Search"
                    )}
                  </h1>
                  {!isLoading && query && (
                    <p className="text-news-gray-600 dark:text-news-gray-400">
                      {searchResults.length} {searchResults.length === 1 ? 'article' : 'articles'} found
                    </p>
                  )}
                </div>
                
                {searchResults.length > 0 && (
                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="mr-2 text-sm text-news-gray-600 dark:text-news-gray-400">Sort by:</span>
                    <div className="flex border rounded overflow-hidden">
                      <button 
                        className={`px-3 py-1 text-sm ${sortOrder === "relevance" ? "bg-news-primary text-white" : "bg-white dark:bg-news-gray-800 hover:bg-news-gray-100 dark:hover:bg-news-gray-700"}`}
                        onClick={() => setSortOrder("relevance")}
                      >
                        Relevance
                      </button>
                      <button 
                        className={`px-3 py-1 text-sm ${sortOrder === "newest" ? "bg-news-primary text-white" : "bg-white dark:bg-news-gray-800 hover:bg-news-gray-100 dark:hover:bg-news-gray-700"}`}
                        onClick={() => setSortOrder("newest")}
                      >
                        Newest
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters - Mobile */}
                {showFilters && (
                  <div className="bg-white dark:bg-news-gray-900 p-4 rounded-lg shadow-sm lg:hidden mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="font-bold">Filters</h2>
                      <button onClick={() => setShowFilters(false)}>
                        <X size={18} />
                      </button>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Categories</h3>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category} className="flex items-center">
                            <Checkbox 
                              id={`category-${category}-mobile`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label 
                              htmlFor={`category-${category}-mobile`}
                              className="ml-2 flex items-center justify-between w-full"
                            >
                              <span>{category}</span>
                              <span className="text-sm text-news-gray-500">({getCategoryCount(category)})</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {(selectedCategories.length > 0 || sortOrder !== "relevance") && (
                      <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                        Clear Filters
                      </Button>
                    )}
                  </div>
                )}
                
                {/* Filters - Desktop */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                  <div className="bg-white dark:bg-news-gray-900 p-4 rounded-lg shadow-sm sticky top-20">
                    <h2 className="font-bold mb-4">Filters</h2>
                    
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Categories</h3>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category} className="flex items-center">
                            <Checkbox 
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label 
                              htmlFor={`category-${category}`}
                              className="ml-2 flex items-center justify-between w-full"
                            >
                              <span>{category}</span>
                              <span className="text-sm text-news-gray-500">({getCategoryCount(category)})</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {(selectedCategories.length > 0 || sortOrder !== "relevance") && (
                      <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                        Clear Filters
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Search Results */}
                <div className="flex-grow">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
                      <span className="ml-2">Searching...</span>
                    </div>
                  ) : (
                    <>
                      {query ? (
                        <>
                          {searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {searchResults.map(article => (
                                <ArticleCard key={article.id} article={article} />
                              ))}
                            </div>
                          ) : (
                            <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-8 text-center">
                              <Search className="h-12 w-12 mx-auto text-news-gray-300 mb-4" />
                              <h2 className="text-xl font-bold mb-2">No results found</h2>
                              <p className="text-news-gray-600 dark:text-news-gray-400 mb-4">
                                We couldn't find any articles matching "{query}".
                              </p>
                              <p className="text-news-gray-600 dark:text-news-gray-400 mb-6">
                                Try different keywords or browse our categories.
                              </p>
                              <div className="flex flex-wrap justify-center gap-2">
                                {categories.map(category => (
                                  <Link 
                                    key={category} 
                                    to={`/?category=${category.toLowerCase()}`}
                                    className="px-4 py-2 bg-news-gray-100 dark:bg-news-gray-800 rounded-full hover:bg-news-gray-200 dark:hover:bg-news-gray-700"
                                  >
                                    {category}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-8 text-center">
                          <Search className="h-12 w-12 mx-auto text-news-gray-300 mb-4" />
                          <h2 className="text-xl font-bold mb-2">Enter a search term</h2>
                          <p className="text-news-gray-600 dark:text-news-gray-400 mb-4">
                            Type something in the search box to find articles.
                          </p>
                          <p className="text-news-gray-600 dark:text-news-gray-400">
                            You can search by article title, content, category, or tags.
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <SidePanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
