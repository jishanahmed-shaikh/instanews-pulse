
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Careers = () => {
  const [openJob, setOpenJob] = useState<number | null>(null);
  
  const jobOpenings = [
    {
      id: 1,
      title: "Senior News Editor",
      department: "Editorial",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "We are seeking an experienced Senior News Editor to lead our editorial team. The ideal candidate will have a strong background in journalism, exceptional writing and editing skills, and the ability to manage a team of reporters.",
      responsibilities: [
        "Oversee the daily news coverage and editorial direction",
        "Edit and approve articles before publication",
        "Manage a team of reporters and junior editors",
        "Ensure adherence to journalistic standards and ethics",
        "Collaborate with other departments on special features and projects"
      ],
      requirements: [
        "Bachelor's degree in Journalism or related field",
        "5+ years of experience in editorial role, preferably in digital news",
        "Excellent writing, editing, and fact-checking skills",
        "Strong news judgment and attention to detail",
        "Team management experience"
      ]
    },
    {
      id: 2,
      title: "Front-End Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "InstaNews Pulse is looking for a talented Front-End Developer to join our technology team. You'll be responsible for implementing visual elements and user interactions that users see and interact with on our news platform.",
      responsibilities: [
        "Build and maintain our news website using modern web technologies",
        "Create responsive designs that work across all devices",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with back-end developers and designers",
        "Stay up-to-date with emerging trends in web development"
      ],
      requirements: [
        "3+ years of experience in front-end development",
        "Proficiency in HTML, CSS, JavaScript, and React",
        "Experience with responsive design and mobile-first approaches",
        "Knowledge of performance optimization techniques",
        "Familiarity with version control systems (e.g., Git)"
      ]
    },
    {
      id: 3,
      title: "Investigative Reporter",
      department: "Editorial",
      location: "New York, NY",
      type: "Full-time",
      posted: "1 week ago",
      description: "We're seeking an experienced Investigative Reporter to join our award-winning investigative team. The ideal candidate will have a track record of uncovering important stories and presenting them in a compelling way.",
      responsibilities: [
        "Develop and research original investigative stories",
        "Conduct in-depth interviews and document reviews",
        "Collaborate with data journalists and multimedia teams",
        "Write long-form articles and series",
        "Follow leads and develop sources"
      ],
      requirements: [
        "Bachelor's degree in Journalism or related field",
        "3+ years of investigative reporting experience",
        "Strong research and interviewing skills",
        "Experience with public records requests and data analysis",
        "Excellent storytelling abilities"
      ]
    },
    {
      id: 4,
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      posted: "4 days ago",
      description: "InstaNews Pulse is looking for a creative and data-driven Social Media Manager to grow our presence across social platforms and engage with our audience effectively.",
      responsibilities: [
        "Develop and implement social media strategy",
        "Create engaging content for various social platforms",
        "Monitor performance and optimize campaigns",
        "Stay current with social media trends and best practices",
        "Collaborate with editorial and marketing teams"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience managing social media for a news/media organization",
        "Proficiency with social media management tools",
        "Understanding of social media analytics",
        "Excellent writing and communication skills"
      ]
    }
  ];
  
  const toggleJob = (id: number) => {
    setOpenJob(openJob === id ? null : id);
  };
  
  const handleApply = (jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `You've started your application for ${jobTitle}. Complete your profile to continue.`,
    });
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
            <span>Careers</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Join Our Team</h1>
            
            <p className="text-lg text-news-gray-600 dark:text-news-gray-400 mb-8">
              At InstaNews Pulse, we're building the future of digital journalism. Join our talented team of reporters, editors, designers, and engineers to make an impact in the world of news.
            </p>
            
            <div className="bg-news-gray-50 dark:bg-news-gray-800 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-news-gray-900 p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Make an Impact</h3>
                  <p className="text-news-gray-600 dark:text-news-gray-400">
                    Your work will reach millions of readers worldwide and help shape how people understand current events.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-news-gray-900 p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Grow Your Career</h3>
                  <p className="text-news-gray-600 dark:text-news-gray-400">
                    We invest in our people with mentorship, training, and clear paths for advancement.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-news-gray-900 p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Great Benefits</h3>
                  <p className="text-news-gray-600 dark:text-news-gray-400">
                    Enjoy competitive compensation, health coverage, generous PTO, and flexible working arrangements.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
            
            <div className="space-y-4 mb-10">
              {jobOpenings.map(job => (
                <div key={job.id} className="border border-news-gray-200 dark:border-news-gray-700 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-news-gray-50 dark:hover:bg-news-gray-800"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1 text-sm text-news-gray-600 dark:text-news-gray-400">
                        <span>{job.department}</span>
                        <span className="text-news-gray-300 dark:text-news-gray-600">•</span>
                        <span>{job.location}</span>
                        <span className="text-news-gray-300 dark:text-news-gray-600">•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center mr-4 text-sm text-news-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>{job.posted}</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${openJob === job.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  {openJob === job.id && (
                    <div className="p-4 bg-news-gray-50 dark:bg-news-gray-800 border-t border-news-gray-200 dark:border-news-gray-700 animate-fade-in">
                      <p className="mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={16} className="text-news-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={16} className="text-news-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <Button onClick={() => handleApply(job.title)}>
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-news-primary/5 dark:bg-news-primary/10 rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-2">Don't see a position that fits your skills?</h3>
              <p className="mb-4">Send us your resume anyway. We're always looking for talented people to join our team.</p>
              <Button variant="outline" onClick={() => window.location.href = "/contact"}>
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
