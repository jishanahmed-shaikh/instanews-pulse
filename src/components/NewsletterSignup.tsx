
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSignup = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-sm text-news-gray-600 dark:text-news-gray-400 mb-4">
        Get the latest news delivered to your inbox
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-news-gray-300"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-news-primary hover:bg-news-primary/90 text-white"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
