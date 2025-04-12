
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserProfile } from "@/components/UserProfile";
import { categories } from "@/data/mockData";
import { Menu, Search, X } from "lucide-react";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when changing routes
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search results with query
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };
  
  // Handle category navigation
  const handleCategoryClick = (category: string) => {
    // In a real app, this would navigate to a filtered view
    navigate(`/?category=${category.toLowerCase()}`);
    setShowMobileMenu(false);
  };

  // Handle showing all articles
  const handleShowAllArticles = () => {
    navigate('/');
    setShowMobileMenu(false);
  };
  
  return (
    <header className="sticky top-0 bg-white dark:bg-news-gray-900 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold font-serif text-news-primary">
              InstaNews<span className="text-news-accent">Pulse</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/"
              className="nav-link px-3 py-2 text-news-gray-700 dark:text-news-gray-300 hover:text-news-primary dark:hover:text-news-primary transition-colors rounded-md font-medium"
              onClick={handleShowAllArticles}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/?category=${category.toLowerCase()}`}
                className="nav-link px-3 py-2 text-news-gray-700 dark:text-news-gray-300 hover:text-news-primary dark:hover:text-news-primary transition-colors rounded-md"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative animate-fade-in">
                <Input
                  type="search"
                  placeholder="Search news..."
                  className="w-40 sm:w-64 pr-8"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setShowSearch(false)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <ThemeToggle />

            <UserProfile />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 md:hidden"
              onClick={() => setShowMobileMenu(true)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white dark:bg-news-gray-900 z-50 flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" className="text-2xl font-bold font-serif text-news-primary">
              InstaNews<span className="text-news-accent">Pulse</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileMenu(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          <nav className="flex flex-col p-4 overflow-y-auto">
            <Link
              to="/"
              className="py-3 px-4 border-b border-news-gray-100 dark:border-news-gray-800 hover:bg-news-gray-50 dark:hover:bg-news-gray-800 font-medium"
              onClick={handleShowAllArticles}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/?category=${category.toLowerCase()}`}
                className="py-3 px-4 border-b border-news-gray-100 dark:border-news-gray-800 hover:bg-news-gray-50 dark:hover:bg-news-gray-800"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
            <div className="mt-4 space-y-2 border-t pt-4">
              <Link
                to="/bookmarks"
                className="block py-3 px-4 hover:bg-news-gray-50 dark:hover:bg-news-gray-800"
                onClick={() => setShowMobileMenu(false)}
              >
                My Bookmarks
              </Link>
              <Link
                to="/profile"
                className="block py-3 px-4 hover:bg-news-gray-50 dark:hover:bg-news-gray-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block py-3 px-4 hover:bg-news-gray-50 dark:hover:bg-news-gray-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Settings
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
