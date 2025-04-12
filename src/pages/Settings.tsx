
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

const Settings = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState({
    theme: "system",
    fontSize: "medium",
    saveReadingHistory: true,
    autoplayVideos: false,
    enableAnalytics: true,
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    twoFactorAuth: false
  });
  
  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUserData(JSON.parse(savedUser));
      }
      
      // Get saved settings or use defaults
      const savedSettings = localStorage.getItem('settings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
      
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleSettingChange = (setting: string, value: any) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: value };
      localStorage.setItem('settings', JSON.stringify(newSettings));
      return newSettings;
    });
    
    toast({
      title: "Setting updated",
      description: "Your preference has been saved."
    });
    
    // Apply theme setting immediately
    if (setting === "theme") {
      if (value === "dark") {
        document.documentElement.classList.add("dark");
      } else if (value === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        // System preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    }
  };
  
  const deleteAccount = () => {
    // Show confirmation toast
    toast({
      title: "Are you sure?",
      description: "This action cannot be undone. To confirm, please enter your password on the next screen.",
      variant: "destructive",
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
          <span className="ml-2">Loading settings...</span>
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
            <p className="mb-6">Please log in to access your settings</p>
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
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            
            <Tabs defaultValue="appearance">
              <TabsList className="mb-6 grid grid-cols-4 w-full">
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>
              
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-6">
                <TabsContent value="appearance">
                  <h2 className="text-xl font-bold mb-6">Appearance Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="theme-select">Theme</Label>
                        <Select 
                          value={settings.theme} 
                          onValueChange={(value) => handleSettingChange("theme", value)}
                        >
                          <SelectTrigger id="theme-select" className="mt-1">
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-news-gray-500 mt-1">
                          Choose how InstaNews Pulse appears to you
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="font-size-select">Font Size</Label>
                        <Select 
                          value={settings.fontSize} 
                          onValueChange={(value) => handleSettingChange("fontSize", value)}
                        >
                          <SelectTrigger id="font-size-select" className="mt-1">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                            <SelectItem value="x-large">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-news-gray-500 mt-1">
                          Adjust text size for comfortable reading
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <Label htmlFor="autoplay-videos" className="text-base">Autoplay Videos</Label>
                        <p className="text-sm text-news-gray-500">
                          Automatically play videos as you scroll
                        </p>
                      </div>
                      <Switch 
                        id="autoplay-videos"
                        checked={settings.autoplayVideos}
                        onCheckedChange={(checked) => handleSettingChange("autoplayVideos", checked)}
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="account">
                  <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={userData.avatar} alt={userData.name} />
                        <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-medium">{userData.name}</h3>
                        <p className="text-sm text-news-gray-500">{userData.email}</p>
                      </div>
                      
                      <Button variant="outline" size="sm" className="ml-auto">
                        Change Avatar
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={userData.name} className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={userData.email} className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value="••••••••" className="mt-1" />
                        <p className="text-sm text-news-gray-500 mt-1">
                          Last changed 3 months ago
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <Label htmlFor="two-factor" className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-news-gray-500">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch 
                        id="two-factor"
                        checked={settings.twoFactorAuth}
                        onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
                      />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Danger Zone</h3>
                      <p className="text-sm text-news-gray-500 mb-4">
                        Permanently delete your account and all associated data
                      </p>
                      <Button variant="destructive" onClick={deleteAccount}>
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
                        <p className="text-sm text-news-gray-500">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch 
                        id="email-notifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notifications" className="text-base">Browser Notifications</Label>
                        <p className="text-sm text-news-gray-500">
                          Receive notifications in your browser
                        </p>
                      </div>
                      <Switch 
                        id="push-notifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                      />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-3">Email Preferences</h3>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <Label htmlFor="marketing-emails" className="text-base">Marketing Emails</Label>
                          <p className="text-sm text-news-gray-500">
                            Receive promotional content and special offers
                          </p>
                        </div>
                        <Switch 
                          id="marketing-emails"
                          checked={settings.marketingEmails}
                          onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="privacy">
                  <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="save-history" className="text-base">Save Reading History</Label>
                        <p className="text-sm text-news-gray-500">
                          Keep track of articles you've read
                        </p>
                      </div>
                      <Switch 
                        id="save-history"
                        checked={settings.saveReadingHistory}
                        onCheckedChange={(checked) => handleSettingChange("saveReadingHistory", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics" className="text-base">Allow Analytics</Label>
                        <p className="text-sm text-news-gray-500">
                          Help us improve by allowing anonymous usage data collection
                        </p>
                      </div>
                      <Switch 
                        id="analytics"
                        checked={settings.enableAnalytics}
                        onCheckedChange={(checked) => handleSettingChange("enableAnalytics", checked)}
                      />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-3">Your Data</h3>
                      <p className="text-sm text-news-gray-500 mb-4">
                        You can download all your data or request its deletion
                      </p>
                      <div className="flex gap-4">
                        <Button variant="outline">
                          Download My Data
                        </Button>
                        <Button variant="outline">
                          Request Data Deletion
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
