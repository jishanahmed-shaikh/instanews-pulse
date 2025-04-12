
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import { ChevronRight } from "lucide-react";

const TermsOfUse = () => {
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
                <span>Terms of Use</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Terms of Use</h1>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 md:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-sm text-news-gray-500 mb-6">Last updated: April 1, 2025</p>
                  
                  <p>
                    Welcome to InstaNews Pulse. By accessing or using our website, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, please do not use our website.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on InstaNews Pulse's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by InstaNews Pulse at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
                  <p>
                    The materials on InstaNews Pulse's website are provided on an 'as is' basis. InstaNews Pulse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    Further, InstaNews Pulse does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Limitations</h2>
                  <p>
                    In no event shall InstaNews Pulse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on InstaNews Pulse's website, even if InstaNews Pulse or a InstaNews Pulse authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                  <p>
                    Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Accuracy of Materials</h2>
                  <p>
                    The materials appearing on InstaNews Pulse's website could include technical, typographical, or photographic errors. InstaNews Pulse does not warrant that any of the materials on its website are accurate, complete, or current. InstaNews Pulse may make changes to the materials contained on its website at any time without notice. However, InstaNews Pulse does not make any commitment to update the materials.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Links</h2>
                  <p>
                    InstaNews Pulse has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by InstaNews Pulse of the site. Use of any such linked website is at the user's own risk.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Modifications</h2>
                  <p>
                    InstaNews Pulse may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">User Account</h2>
                  <p>
                    If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. You must immediately notify InstaNews Pulse of any unauthorized use of your account or any other breach of security. InstaNews Pulse will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Comments and User Content</h2>
                  <p>
                    When you post comments or other content to our website, you grant InstaNews Pulse a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
                  </p>
                  <p>
                    You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; and that use of the content you supply does not violate these Terms of Use and will not cause injury to any person or entity.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <p>
                    <a href="mailto:legal@instanewspulse.com" className="text-news-primary hover:underline">legal@instanewspulse.com</a>
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

export default TermsOfUse;
