import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Bell, Settings, User, Edit2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArticleCard } from "@/components/ArticleCard";
import { Article, articles } from "@/data/mockData";

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  location?: string;
  phone?: string;
  website?: string;
  isLoggedIn: boolean;
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserData>>({});
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);
  
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    browser: true,
    breakingNews: true,
    dailyDigest: true,
    weeklyNewsletter: false,
    comments: true
  });
  
  useEffect(() => {
    setTimeout(() => {
      const mockUser = {
        id: "user-123",
        name: "Jishanahmed AR Shaikh",
        email: "jishanahmed.shaikh@example.com",
        avatar: "public/image-uploads/jishanahmed.png",
        bio: "Founder, CEO & CTO of InstaNews Pulse. Passionate about technology, news, and innovation.",
        location: "Mumbai, India",
        phone: "8591764236",
        website: "linktr.ee/jishanahmedshaikh",
        isLoggedIn: true
      };
      
      setUserData(mockUser);
      setFormData({
        name: mockUser.name,
        email: mockUser.email,
        bio: mockUser.bio,
        location: mockUser.location,
        phone: mockUser.phone,
        website: mockUser.website
      });
      
      const randomArticles = [...articles]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setBookmarkedArticles(randomArticles);
      
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userData) {
      const updatedUser = { ...userData, ...formData };
      setUserData(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setIsEditing(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }
  };
  
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing && userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        bio: userData.bio,
        location: userData.location,
        phone: userData.phone,
        website: userData.website
      });
    }
  };
  
  const handleNotificationChange = (key: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
    
    toast({
      title: "Settings saved",
      description: "Your notification preferences have been updated.",
    });
  };
  
  const handleRemoveBookmark = (articleId: string) => {
    setBookmarkedArticles(prev => prev.filter(article => article.id !== articleId));
    
    toast({
      title: "Bookmark removed",
      description: "The article has been removed from your bookmarks.",
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
          <span className="ml-2">Loading profile...</span>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!userData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Not Logged In</h1>
            <p className="mb-6">Please log in to view your profile</p>
            <Button onClick={() => window.location.href = "/"}>
              Return to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-news-primary/10 h-40 relative"></div>
              
              <div className="px-6 pb-6">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12 md:-mt-16 mb-6 relative">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white dark:border-news-gray-900 shadow-md">
                    <AvatarImage src={userData.avatar} />
                    <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-grow">
                    <h1 className="text-2xl md:text-3xl font-bold">{userData.name}</h1>
                    <p className="text-news-gray-500">{userData.location}</p>
                    {userData.website && (
                      <a 
                        href={`https://${userData.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-news-primary hover:underline text-sm"
                      >
                        {userData.website}
                      </a>
                    )}
                  </div>
                  
                  <Button variant="outline" onClick={handleToggleEdit} className="absolute top-2 right-2 md:relative md:top-auto md:right-auto">
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
                
                {!isEditing ? (
                  <div className="mb-8">
                    <p className="text-news-gray-600 dark:text-news-gray-400 mb-4">{userData.bio}</p>
                    {userData.phone && (
                      <p className="text-news-gray-600 dark:text-news-gray-400 text-sm">
                        <span className="font-medium">Phone:</span> {userData.phone}
                      </p>
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <Input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone || ""}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-1">
                        Website
                      </label>
                      <Input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website || ""}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-1">
                        Location
                      </label>
                      <Input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location || ""}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio || ""}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-2 border border-gray-300 dark:border-news-gray-700 rounded-md"
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                )}
                
                <Tabs defaultValue="bookmarks">
                  <TabsList className="grid grid-cols-3 w-full md:w-1/2">
                    <TabsTrigger value="bookmarks">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Bookmarks
                    </TabsTrigger>
                    <TabsTrigger value="notifications">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger value="settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bookmarks" className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Your Bookmarks</h2>
                    
                    {bookmarkedArticles.length > 0 ? (
                      <div className="space-y-4">
                        {bookmarkedArticles.map(article => (
                          <div key={article.id} className="relative">
                            <ArticleCard article={article} variant="compact" />
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-2 right-2 p-1"
                              onClick={() => handleRemoveBookmark(article.id)}
                            >
                              <Bookmark className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Bookmark className="h-12 w-12 mx-auto text-news-gray-300 mb-4" />
                        <h3 className="text-lg font-medium mb-2">No bookmarks yet</h3>
                        <p className="text-news-gray-500 mb-4">
                          You haven't bookmarked any articles yet. Click the bookmark icon on any article to save it for later.
                        </p>
                        <Button variant="outline" onClick={() => window.location.href = "/"}>
                          Browse Articles
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="notifications" className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Notification Methods</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
                              <p className="text-sm text-news-gray-500">Receive notifications via email</p>
                            </div>
                            <Switch 
                              id="email-notifications" 
                              checked={notificationSettings.email}
                              onCheckedChange={() => handleNotificationChange('email')}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="browser-notifications" className="text-base">Browser Notifications</Label>
                              <p className="text-sm text-news-gray-500">Receive notifications in your browser</p>
                            </div>
                            <Switch 
                              id="browser-notifications" 
                              checked={notificationSettings.browser}
                              onCheckedChange={() => handleNotificationChange('browser')}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Notification Types</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="breaking-news" className="text-base">Breaking News</Label>
                              <p className="text-sm text-news-gray-500">Get alerts for major breaking news</p>
                            </div>
                            <Switch 
                              id="breaking-news" 
                              checked={notificationSettings.breakingNews}
                              onCheckedChange={() => handleNotificationChange('breakingNews')}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="daily-digest" className="text-base">Daily Digest</Label>
                              <p className="text-sm text-news-gray-500">Receive a daily summary of top stories</p>
                            </div>
                            <Switch 
                              id="daily-digest" 
                              checked={notificationSettings.dailyDigest}
                              onCheckedChange={() => handleNotificationChange('dailyDigest')}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="weekly-newsletter" className="text-base">Weekly Newsletter</Label>
                              <p className="text-sm text-news-gray-500">Get our weekly news roundup</p>
                            </div>
                            <Switch 
                              id="weekly-newsletter" 
                              checked={notificationSettings.weeklyNewsletter}
                              onCheckedChange={() => handleNotificationChange('weeklyNewsletter')}
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="comments" className="text-base">Comment Replies</Label>
                              <p className="text-sm text-news-gray-500">Be notified when someone replies to your comments</p>
                            </div>
                            <Switch 
                              id="comments" 
                              checked={notificationSettings.comments}
                              onCheckedChange={() => handleNotificationChange('comments')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Account Settings</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Privacy</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="public-profile" className="text-base">Public Profile</Label>
                              <p className="text-sm text-news-gray-500">Make your profile visible to other users</p>
                            </div>
                            <Switch id="public-profile" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="show-reading-history" className="text-base">Public Reading History</Label>
                              <p className="text-sm text-news-gray-500">Allow others to see what articles you've read</p>
                            </div>
                            <Switch id="show-reading-history" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Reading Experience</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="auto-play-videos" className="text-base">Auto-play Videos</Label>
                              <p className="text-sm text-news-gray-500">Automatically play videos in articles</p>
                            </div>
                            <Switch id="auto-play-videos" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="save-reading-position" className="text-base">Save Reading Position</Label>
                              <p className="text-sm text-news-gray-500">Remember where you left off in articles</p>
                            </div>
                            <Switch id="save-reading-position" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
