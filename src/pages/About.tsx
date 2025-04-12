
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About InstaNewsPulse</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-news-gray-700 dark:text-news-gray-300 mb-4">
                At InstaNewsPulse, we believe in the power of timely, accurate, and insightful news. Our mission is to keep our readers informed about the most important events and developments happening around the world, delivered in a format that respects your time and intelligence.
              </p>
              <p className="text-news-gray-700 dark:text-news-gray-300">
                We're committed to journalistic integrity, fact-based reporting, and providing multiple perspectives on complex issues. In an era of information overload, our goal is to cut through the noise and deliver news that matters.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Our Team</h2>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="h-32 w-32 border-2 border-news-primary">
                    <AvatarImage src="public/image-uploads/jishanahmed.png" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1">Jishanahmed AR Shaikh</h3>
                    <p className="text-news-primary font-medium mb-3">Founder, CEO & CTO</p>
                    <p className="text-news-gray-700 dark:text-news-gray-300 mb-4">
                      Jishanahmed founded InstaNewsPulse with a vision to transform how people consume news in the digital age. With a background in technology and journalism, he leads the company's strategic direction and technological innovation.
                    </p>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://www.facebook.com/jishanahmedarshaikh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
                        aria-label="Facebook profile"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.x.com/jishanarshaikh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
                        aria-label="Twitter profile"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.instagram.com/jishanahmed_shaikh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
                        aria-label="Instagram profile"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/jishanahmedshaikh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-news-gray-600 hover:text-news-primary dark:text-news-gray-400 dark:hover:text-news-primary"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-news-gray-700 dark:text-news-gray-300">
                Our team consists of dedicated journalists, editors, and tech professionals committed to delivering high-quality news content. We believe in diversity of thought and experience, which helps us provide comprehensive coverage on a wide range of topics.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
                  <p className="text-news-gray-700 dark:text-news-gray-300">
                    We verify information from multiple sources before publishing and promptly correct any errors.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">Independence</h3>
                  <p className="text-news-gray-700 dark:text-news-gray-300">
                    We maintain editorial independence and are not influenced by political or commercial interests.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">Fairness</h3>
                  <p className="text-news-gray-700 dark:text-news-gray-300">
                    We present multiple perspectives on complex issues and treat all subjects with respect.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-news-gray-700 dark:text-news-gray-300">
                    We strive to make our news accessible to everyone, regardless of technological expertise or background.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our History</h2>
              <p className="text-news-gray-700 dark:text-news-gray-300 mb-4">
                InstaNewsPulse was founded in 2024 by Jishanahmed AR Shaikh, who recognized the need for a news platform that could deliver timely, accurate information in a format suited to modern consumption habits.
              </p>
              <p className="text-news-gray-700 dark:text-news-gray-300 mb-4">
                Starting with a small team of passionate journalists and developers, we've grown steadily by focusing on quality reporting and technological innovation. Today, we reach millions of readers worldwide and continue to expand our coverage while maintaining our core commitment to journalistic excellence.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
