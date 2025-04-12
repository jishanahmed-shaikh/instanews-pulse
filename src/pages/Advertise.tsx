
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Advertise = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Received",
        description: "Thank you for your interest. Our advertising team will contact you soon.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-news-gray-500 mb-6">
            <a href="/" className="hover:text-news-primary">Home</a>
            <ChevronRight size={14} className="mx-2" />
            <span>Advertise</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Advertise With Us</h1>
            
            <p className="text-lg text-news-gray-600 dark:text-news-gray-400 mb-8">
              Connect with our engaged audience of millions of readers through strategic advertising partnerships with InstaNews Pulse.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">Why Advertise With Us?</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex">
                      <CheckCircle className="text-news-accent h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Reach Millions</h3>
                        <p className="text-news-gray-600 dark:text-news-gray-400">
                          Our platform reaches over 15 million unique visitors monthly across desktop and mobile.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <CheckCircle className="text-news-accent h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Targeted Audience</h3>
                        <p className="text-news-gray-600 dark:text-news-gray-400">
                          Our readers are educated professionals with high purchasing power in key demographics.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <CheckCircle className="text-news-accent h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Premium Content Environment</h3>
                        <p className="text-news-gray-600 dark:text-news-gray-400">
                          Your ads appear alongside trusted, high-quality journalism that engages readers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <CheckCircle className="text-news-accent h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg">Flexible Options</h3>
                        <p className="text-news-gray-600 dark:text-news-gray-400">
                          From display ads to sponsored content, we offer solutions for every marketing objective.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-4">Audience Demographics</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-news-gray-50 dark:bg-news-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Age</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>18-34</span>
                            <span>35%</span>
                          </div>
                          <div className="w-full bg-news-gray-200 dark:bg-news-gray-700 rounded-full h-2">
                            <div className="bg-news-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>35-49</span>
                            <span>42%</span>
                          </div>
                          <div className="w-full bg-news-gray-200 dark:bg-news-gray-700 rounded-full h-2">
                            <div className="bg-news-primary h-2 rounded-full" style={{ width: "42%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>50+</span>
                            <span>23%</span>
                          </div>
                          <div className="w-full bg-news-gray-200 dark:bg-news-gray-700 rounded-full h-2">
                            <div className="bg-news-primary h-2 rounded-full" style={{ width: "23%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-news-gray-50 dark:bg-news-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Education</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>College Degree</span>
                            <span>68%</span>
                          </div>
                          <div className="w-full bg-news-gray-200 dark:bg-news-gray-700 rounded-full h-2">
                            <div className="bg-news-accent h-2 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Advanced Degree</span>
                            <span>32%</span>
                          </div>
                          <div className="w-full bg-news-gray-200 dark:bg-news-gray-700 rounded-full h-2">
                            <div className="bg-news-accent h-2 rounded-full" style={{ width: "32%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-4">Ad Options</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-news-gray-200 dark:border-news-gray-700 rounded-lg p-4">
                      <h4 className="font-bold">Display Advertising</h4>
                      <p className="text-sm text-news-gray-600 dark:text-news-gray-400">
                        Banner ads, leaderboards, and sidebars across our site.
                      </p>
                    </div>
                    
                    <div className="border border-news-gray-200 dark:border-news-gray-700 rounded-lg p-4">
                      <h4 className="font-bold">Sponsored Content</h4>
                      <p className="text-sm text-news-gray-600 dark:text-news-gray-400">
                        Native articles written by our team to highlight your brand.
                      </p>
                    </div>
                    
                    <div className="border border-news-gray-200 dark:border-news-gray-700 rounded-lg p-4">
                      <h4 className="font-bold">Newsletter Sponsorship</h4>
                      <p className="text-sm text-news-gray-600 dark:text-news-gray-400">
                        Reach our most engaged readers directly in their inbox.
                      </p>
                    </div>
                    
                    <div className="border border-news-gray-200 dark:border-news-gray-700 rounded-lg p-4">
                      <h4 className="font-bold">Custom Solutions</h4>
                      <p className="text-sm text-news-gray-600 dark:text-news-gray-400">
                        Tailored campaigns designed to meet your specific marketing goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="sticky top-20 bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Request Ad Information</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-1">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      >
                        <option value="">Select a budget range</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Sending..." : "Request Information"}
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-news-gray-600 dark:text-news-gray-400">
                      Or contact us directly:
                    </p>
                    <a 
                      href="mailto:advertising@instanewspulse.com" 
                      className="flex items-center justify-center mt-2 text-news-primary hover:text-news-accent"
                    >
                      <Mail size={14} className="mr-1" />
                      advertising@instanewspulse.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Advertise;
