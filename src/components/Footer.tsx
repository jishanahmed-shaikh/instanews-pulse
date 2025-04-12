
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { categories } from "@/data/mockData";

const Footer = () => {
  return (
    <footer className="bg-news-gray-100 dark:bg-news-gray-900 border-t border-news-gray-200 dark:border-news-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About/Logo */}
          <div>
            <Link to="/" className="block mb-4">
              <h2 className="text-2xl font-bold font-serif text-news-primary">
                InstaNews<span className="text-news-accent">Pulse</span>
              </h2>
            </Link>
            <p className="text-news-gray-600 dark:text-news-gray-400 mb-4 text-sm">
              Your trusted source for breaking news, in-depth analysis, and thought-provoking stories from around the globe.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/jishanahmedarshaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.twitter.com/jishanarshaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/jishanahmed_shaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jishanahmedshaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <Link 
                    to={`/?category=${category.toLowerCase()}`}
                    className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/advertise" 
                  className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
                >
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-news-gray-600 dark:text-news-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest news and updates delivered directly to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-news-gray-200 dark:border-news-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-news-gray-600 dark:text-news-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} InstaNewsPulse. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/privacy-policy" 
              className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use" 
              className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
            >
              Terms of Use
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
