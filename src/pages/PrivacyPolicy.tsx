
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import { ChevronRight } from "lucide-react";

const PrivacyPolicy = () => {
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
                <span>Privacy Policy</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Privacy Policy</h1>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 md:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-sm text-news-gray-500 mb-6">Last updated: April 1, 2025</p>
                  
                  <p>
                    At InstaNews Pulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Personal Data</h3>
                  <p>
                    We may collect personal identification information from you in a variety of ways, including, but not limited to, when you:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Register on our site</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Respond to a survey</li>
                    <li>Fill out a form</li>
                    <li>Submit a comment</li>
                  </ul>
                  <p>
                    Personal information may include your name, email address, mailing address, phone number, and other details that help us provide you with a better experience.
                  </p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-2">Non-Personal Data</h3>
                  <p>
                    We may collect non-personal identification information about you whenever you interact with our site. This data may include:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Browser name</li>
                    <li>Type of device</li>
                    <li>Technical information about your connection to our site</li>
                    <li>IP address</li>
                    <li>Referral source</li>
                    <li>Pages visited</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                  <p>
                    We may use the information we collect from you in the following ways:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>To personalize your experience and deliver content most relevant to your interests</li>
                    <li>To improve our website based on your feedback and browsing patterns</li>
                    <li>To send periodic emails regarding your account or other products and services</li>
                    <li>To process transactions</li>
                    <li>To administer contests, promotions, surveys, or other site features</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
                  <p>
                    Our website uses cookies and similar tracking technologies to track activity on our site and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Disclosure</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of any site you visit.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">GDPR Compliance</h2>
                  <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">California Consumer Privacy Act (CCPA)</h2>
                  <p>
                    If you are a California resident, you have the right to know what personal information we collect, disclose, or sell. You also have the right to request deletion of your personal information and to opt-out of the sale of your personal information.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Children's Information</h2>
                  <p>
                    Our website is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and are aware that your child has provided us with personal data, please contact us.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
