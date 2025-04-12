
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm text-news-gray-500 mb-6">
                <a href="/" className="hover:text-news-primary">Home</a>
                <ChevronRight size={14} className="mx-2" />
                <span>Contact Us</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Contact Us</h1>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-news-gray-600 dark:text-news-gray-400 mb-6">
                      Have a question, comment, or tip? We'd love to hear from you. Fill out the form below, and our team will get back to you as soon as possible.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-news-primary mt-1 mr-3" />
                        <div>
                          <h3 className="font-medium">Address</h3>
                          <p className="text-news-gray-600 dark:text-news-gray-400">
                            123 News Avenue, MediaCity<br />
                            San Francisco, CA 94158
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-news-primary mt-1 mr-3" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-news-gray-600 dark:text-news-gray-400">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-news-primary mt-1 mr-3" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-news-gray-600 dark:text-news-gray-400">
                            contact@instanewspulse.com
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">For Press Inquiries</h3>
                      <p className="text-news-gray-600 dark:text-news-gray-400">
                        press@instanewspulse.com
                      </p>
                    </div>
                  </div>
                  
                  <div>
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
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Report an Issue">Report an Issue</option>
                          <option value="News Tip">News Tip</option>
                          <option value="Advertising">Advertising</option>
                          <option value="Subscription">Subscription</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                        ></textarea>
                      </div>
                      
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
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

export default Contact;
