
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, MessageSquare, Star, ThumbsUp, UserRound, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  type: "comment" | "like" | "system" | "mention" | "featured" | "followRequest";
  read: boolean;
  time: string;
  content: string;
  link?: string;
  user?: {
    name: string;
    avatar: string;
  };
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading notifications
    setTimeout(() => {
      const mockNotifications: Notification[] = [
        {
          id: "1",
          type: "comment",
          read: false,
          time: "5 minutes ago",
          content: "Michael Chen replied to your comment on \"Revolutionary AI Model Can Predict Stock Market Trends With 89% Accuracy\"",
          link: "/article/article-2",
          user: {
            name: "Michael Chen",
            avatar: "https://i.pravatar.cc/150?img=53"
          }
        },
        {
          id: "2",
          type: "like",
          read: false,
          time: "2 hours ago",
          content: "Sarah Johnson liked your comment on \"Global Leaders Convene for Climate Summit as Temperatures Soar\"",
          link: "/article/article-1",
          user: {
            name: "Sarah Johnson",
            avatar: "https://i.pravatar.cc/150?img=23"
          }
        },
        {
          id: "3",
          type: "system",
          read: true,
          time: "Yesterday",
          content: "Welcome to InstaNews Pulse! Explore the latest news and customize your reading experience.",
          link: "/settings"
        },
        {
          id: "4",
          type: "featured",
          read: true,
          time: "2 days ago",
          content: "Your comment on \"Election Polls Indicate Tight Race in Swing States\" is now featured",
          link: "/article/article-3"
        },
        {
          id: "5",
          type: "mention",
          read: true,
          time: "3 days ago",
          content: "David Lee mentioned you in a comment on \"Major Tech Company Announces Groundbreaking VR Headset\"",
          link: "/article/article-4",
          user: {
            name: "David Lee",
            avatar: "https://i.pravatar.cc/150?img=43"
          }
        },
        {
          id: "6",
          type: "followRequest",
          read: true,
          time: "1 week ago",
          content: "Elena Rodriguez started following you",
          user: {
            name: "Elena Rodriguez",
            avatar: "https://i.pravatar.cc/150?img=1"
          }
        }
      ];
      
      setNotifications(mockNotifications);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, read: true })));
    
    toast({
      title: "Notifications marked as read",
      description: "All notifications have been marked as read."
    });
  };
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const clearAllNotifications = () => {
    setNotifications([]);
    
    toast({
      title: "Notifications cleared",
      description: "All notifications have been cleared."
    });
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "comment":
        return <MessageSquare className="h-4 w-4" />;
      case "like":
        return <ThumbsUp className="h-4 w-4" />;
      case "system":
        return <Bell className="h-4 w-4" />;
      case "mention":
        return <MessageSquare className="h-4 w-4" />;
      case "featured":
        return <Star className="h-4 w-4" />;
      case "followRequest":
        return <UserRound className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };
  
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
          <span className="ml-2">Loading notifications...</span>
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
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Notifications</h1>
              <div className="flex gap-2">
                {unreadCount > 0 && (
                  <Button variant="outline" size="sm" onClick={markAllAsRead}>
                    Mark all as read
                  </Button>
                )}
                {notifications.length > 0 && (
                  <Button variant="outline" size="sm" onClick={clearAllNotifications}>
                    Clear all
                  </Button>
                )}
              </div>
            </div>
            
            {notifications.length > 0 ? (
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-800">
                {notifications.map(notification => (
                  <Link
                    key={notification.id}
                    to={notification.link || "#"}
                    className={`block p-4 hover:bg-gray-50 dark:hover:bg-gray-800 ${notification.read ? "" : "bg-news-primary/5"}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      {notification.user ? (
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                          <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          notification.type === "system" ? "bg-news-primary text-white" :
                          notification.type === "featured" ? "bg-yellow-500 text-white" :
                          "bg-news-gray-200 dark:bg-news-gray-700"
                        }`}>
                          {getNotificationIcon(notification.type)}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${notification.read ? "text-news-gray-600 dark:text-news-gray-400" : "font-medium"}`}>
                          {notification.content}
                        </p>
                        <p className="text-xs text-news-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                      
                      {!notification.read && (
                        <div className="h-2 w-2 bg-news-primary rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-news-gray-100 dark:bg-news-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-news-gray-400" />
                </div>
                <h2 className="text-xl font-bold mb-2">No notifications</h2>
                <p className="text-news-gray-600 dark:text-news-gray-400 mb-6">
                  You don't have any notifications at the moment.
                </p>
                <Button onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notifications;
