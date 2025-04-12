
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import { ChevronRight } from "lucide-react";

const CookiePolicy = () => {
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
                <span>Cookie Policy</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Cookie Policy</h1>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 md:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-sm text-news-gray-500 mb-6">Last updated: April 1, 2025</p>
                  
                  <p>
                    This Cookie Policy explains how InstaNews Pulse ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>
                  <p>
                    Cookies set by the website owner (in this case, InstaNews Pulse) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Why do we use cookies?</h2>
                  <p>
                    We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Types of cookies we use</h2>
                  <p>
                    The specific types of first and third-party cookies served through our website and the purposes they perform include:
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Performance and Functionality Cookies</h3>
                  <p>
                    These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Analytics and Customization Cookies</h3>
                  <p>
                    These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you in order to enhance your experience.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Advertising Cookies</h3>
                  <p>
                    These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Social Media Cookies</h3>
                  <p>
                    These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">How can I control cookies?</h2>
                  <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in our cookie banner.
                  </p>
                  <p>
                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                  </p>
                  <p>
                    In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-news-primary hover:underline">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-news-primary hover:underline">http://www.youronlinechoices.com</a>.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">How often will you update this Cookie Policy?</h2>
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p>
                    The date at the top of this Cookie Policy indicates when it was last updated.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Where can I get further information?</h2>
                  <p>
                    If you have any questions about our use of cookies or other technologies, please contact us at:
                  </p>
                  <p>
                    <a href="mailto:privacy@instanewspulse.com" className="text-news-primary hover:underline">privacy@instanewspulse.com</a>
                  </p>
                  <p>
                    InstaNews Pulse<br />
                    123 News Avenue<br />
                    San Francisco, CA 94158
                  </p>
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

export default CookiePolicy;
