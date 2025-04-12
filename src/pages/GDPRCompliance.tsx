
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import { ChevronRight } from "lucide-react";

const GDPRCompliance = () => {
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
                <span>GDPR Compliance</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif">GDPR Compliance</h1>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6 md:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-sm text-news-gray-500 mb-6">Last updated: April 1, 2025</p>
                  
                  <p>
                    InstaNews Pulse is committed to ensuring the protection of personal data for users in the European Union (EU) in compliance with the General Data Protection Regulation (GDPR). This page outlines our approach to GDPR compliance and provides information on how we process and protect your personal data.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to GDPR</h2>
                  <p>
                    We have thoroughly assessed our operations and implemented measures to ensure compliance with GDPR. Our approach includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Reviewing and updating our data processing activities</li>
                    <li>Enhancing our security measures to protect personal data</li>
                    <li>Updating our privacy policies and internal procedures</li>
                    <li>Training our staff on GDPR requirements</li>
                    <li>Establishing processes for data subject rights requests</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Data Controller Information</h2>
                  <p>
                    For the purpose of the GDPR, InstaNews Pulse is the data controller responsible for your personal data. If you have any questions about this GDPR Compliance statement or our data practices, please contact our Data Protection Officer:
                  </p>
                  <p>
                    Data Protection Officer<br />
                    InstaNews Pulse<br />
                    123 News Avenue<br />
                    San Francisco, CA 94158<br />
                    Email: <a href="mailto:dpo@instanewspulse.com" className="text-news-primary hover:underline">dpo@instanewspulse.com</a>
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Lawful Basis for Processing</h2>
                  <p>
                    We process personal data on the following lawful bases:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>Consent:</strong> We obtain clear consent for specific data processing activities, such as newsletter subscriptions.</li>
                    <li><strong>Contractual Necessity:</strong> Processing necessary for the performance of our contract with you.</li>
                    <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such as improving our services, as long as these interests don't override your fundamental rights and freedoms.</li>
                    <li><strong>Legal Obligation:</strong> Processing necessary for compliance with a legal obligation.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights Under GDPR</h2>
                  <p>
                    Under GDPR, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>Right to be informed:</strong> You have the right to be informed about the collection and use of your personal data.</li>
                    <li><strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
                    <li><strong>Right to rectification:</strong> You have the right to have inaccurate personal data rectified, or completed if it is incomplete.</li>
                    <li><strong>Right to erasure:</strong> You have the right to request the deletion of your personal data in certain circumstances.</li>
                    <li><strong>Right to restrict processing:</strong> You have the right to request the restriction or suppression of your personal data in certain circumstances.</li>
                    <li><strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                    <li><strong>Right to object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
                    <li><strong>Rights related to automated decision-making and profiling:</strong> You have rights related to automated decision-making and profiling.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">How to Exercise Your Rights</h2>
                  <p>
                    To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:dpo@instanewspulse.com" className="text-news-primary hover:underline">dpo@instanewspulse.com</a>. We will respond to your request within one month of receipt.
                  </p>
                  <p>
                    For verification purposes, we may request specific information from you to confirm your identity. This is a security measure to ensure that personal data is not disclosed to any unauthorized individuals.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Data Transfers Outside the EU</h2>
                  <p>
                    When we transfer your personal data outside the EU, we ensure an adequate level of protection by implementing appropriate safeguards, such as:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Transfers to countries with adequacy decisions from the European Commission</li>
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                    <li>Binding Corporate Rules</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Data Breach Notification</h2>
                  <p>
                    In the event of a personal data breach that presents a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. If the breach presents a high risk to your rights and freedoms, we will also notify you directly.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection Impact Assessments</h2>
                  <p>
                    We conduct Data Protection Impact Assessments (DPIAs) when implementing new technologies or when processing is likely to result in a high risk to your rights and freedoms.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Updates to This Statement</h2>
                  <p>
                    We may update this GDPR Compliance statement from time to time to reflect changes in our practices or regulatory requirements. We encourage you to periodically review this page for the latest information on our GDPR compliance.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Complaints</h2>
                  <p>
                    If you have a concern about our handling of your personal data, please contact us first at <a href="mailto:dpo@instanewspulse.com" className="text-news-primary hover:underline">dpo@instanewspulse.com</a>. If you remain dissatisfied, you have the right to lodge a complaint with your local data protection authority.
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

export default GDPRCompliance;
