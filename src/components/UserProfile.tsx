
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  LogOut, 
  Settings, 
  BookMarked, 
  Bell, 
  ChevronDown,
  Bookmark
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the user type
interface UserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  website?: string;
  isLoggedIn: boolean;
}

export const UserProfile = () => {
  const navigate = useNavigate();
  
  //authentication state
  const [userData, setUserData] = useState<UserData | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const handleLogin = () => {
    // Using Jishanahmed's data
    const mockUser = {
      id: "user-123",
      name: "Jishanahmed AR Shaikh",
      email: "jishanahmed.shaikh@example.com",
      phone: "8591764236",
      website: "linktr.ee/jishanahmedshaikh",
      avatar: "public/image-uploads/jishanahmed.png",
      isLoggedIn: true
    };
    
    setUserData(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    toast({
      title: "Logged in successfully",
      description: `Welcome back, ${mockUser.name}!`,
    });
  };
  
  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  if (!userData) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-2" 
        onClick={handleLogin}
        aria-label="Log in"
      >
        <User className="h-5 w-5" />
      </Button>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2 relative">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userData.avatar} />
            <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userData.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleNavigate("/profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/bookmarks")}>
            <Bookmark className="mr-2 h-4 w-4" />
            <span>Bookmarks</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/notifications")}>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
