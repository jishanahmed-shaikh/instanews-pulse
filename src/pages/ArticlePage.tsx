
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidePanel from "@/components/SidePanel";
import ArticleCard from "@/components/ArticleCard";
import { ChevronRight, Share, Facebook, Twitter, Linkedin, Copy, Bookmark, BookmarkCheck, ThumbsUp, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { Article, articles } from "@/data/mockData";
import { fullArticlesContent, FullArticle } from "@/data/fullArticleContent";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [fullArticle, setFullArticle] = useState<FullArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  
  // Dummy comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=23",
      text: "This article highlights the urgent need for global action. It's alarming to see how rapidly climate change is accelerating.",
      timestamp: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=53",
      text: "I appreciate the detailed breakdown of the summit's goals. However, I wonder if the proposed measures are ambitious enough given the severity of the crisis.",
      timestamp: "5 hours ago",
      likes: 8
    }
  ]);
  
  // Related articles
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    const fetchArticleData = async () => {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      setTimeout(() => {
        if (id) {
          const foundArticle = articles.find(article => article.id === id);
          const fullContent = fullArticlesContent[id as string];
          
          if (foundArticle) {
            setArticle(foundArticle);
            
            // Set random like count
            setLikeCount(Math.floor(Math.random() * 100) + 10);
            
            // Check if article is in bookmarks
            const bookmarks = localStorage.getItem('bookmarks');
            if (bookmarks) {
              const bookmarkedIds = JSON.parse(bookmarks);
              setIsBookmarked(bookmarkedIds.includes(id));
            }
            
            // For full content, use the enhanced content if available, otherwise use the excerpt
            if (fullContent) {
              setFullArticle(fullContent);
              
              // Set related articles
              if (fullContent.relatedArticles && fullContent.relatedArticles.length > 0) {
                const related = articles.filter(a => fullContent.relatedArticles?.includes(a.id));
                setRelatedArticles(related);
              } else {
                // Fallback to random articles from the same category
                const sameCategoryArticles = articles
                  .filter(a => a.category === foundArticle.category && a.id !== id)
                  .slice(0, 3);
                setRelatedArticles(sameCategoryArticles);
              }
            } else {
              // If no full content, set related to same category
              const sameCategoryArticles = articles
                .filter(a => a.category === foundArticle.category && a.id !== id)
                .slice(0, 3);
              setRelatedArticles(sameCategoryArticles);
            }
          }
          
          setIsLoading(false);
        }
      }, 1000);
    };
    
    fetchArticleData();
  }, [id]);
  
  const handleBookmark = () => {
    if (!article) return;
    
    let bookmarks: string[] = [];
    const storedBookmarks = localStorage.getItem('bookmarks');
    
    if (storedBookmarks) {
      bookmarks = JSON.parse(storedBookmarks);
    }
    
    if (isBookmarked) {
      // Remove from bookmarks
      bookmarks = bookmarks.filter(bookmarkId => bookmarkId !== article.id);
      toast({
        title: "Removed from bookmarks",
        description: "The article has been removed from your bookmarks."
      });
    } else {
      // Add to bookmarks
      bookmarks.push(article.id);
      toast({
        title: "Added to bookmarks",
        description: "The article has been added to your bookmarks."
      });
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };
  
  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(prev => prev - 1);
      setHasLiked(false);
      toast({
        title: "Unlike",
        description: "You've removed your like from this article."
      });
    } else {
      setLikeCount(prev => prev + 1);
      setHasLiked(true);
      toast({
        title: "Liked!",
        description: "You've liked this article."
      });
    }
  };
  
  const handleShare = (platform: string) => {
    // In a real app, this would use the Web Share API or platform-specific sharing
    const url = window.location.href;
    const title = article?.title || "Interesting article";
    
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/jishanahmedarshaikh`;
        window.open(shareUrl, "_blank");
        break;
      case "twitter":
        shareUrl = `https://www.twitter.com/jishanarshaikh`;
        window.open(shareUrl, "_blank");
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/in/jishanahmedshaikh`;
        window.open(shareUrl, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: "Link copied",
            description: "Article link copied to clipboard."
          });
        });
        break;
    }
  };
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentText.trim()) return;
    
    // Add new comment
    const newComment = {
      id: comments.length + 1,
      author: "You", // In a real app, this would come from the user's profile
      avatar: "https://i.pravatar.cc/150?img=68", // This would be the user's avatar
      text: commentText,
      timestamp: "Just now",
      likes: 0
    };
    
    setComments([newComment, ...comments]);
    setCommentText("");
    
    toast({
      title: "Comment posted",
      description: "Your comment has been posted successfully."
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-4 border-news-primary border-t-transparent rounded-full"></div>
          <span className="ml-2">Loading article...</span>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">Sorry, the article you're looking for doesn't exist or has been removed.</p>
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm text-news-gray-500 mb-6">
                <Link to="/" className="hover:text-news-primary">Home</Link>
                <ChevronRight size={14} className="mx-2" />
                <Link to={`#category=${article.category}`} className="hover:text-news-primary">{article.category}</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="line-clamp-1">{article.title}</span>
              </div>
              
              <article className="bg-white dark:bg-news-gray-900 rounded-lg shadow-sm overflow-hidden">
                {/* Article Header */}
                <div className="p-6 md:p-8">
                  <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                    {article.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-news-gray-600 dark:text-news-gray-400 mb-6">
                    <span className={`category-tag ${
                      article.category === "World" ? "bg-blue-500" :
                      article.category === "Politics" ? "bg-red-500" :
                      article.category === "Business" ? "bg-green-500" :
                      article.category === "Tech" ? "bg-purple-500" :
                      article.category === "Sports" ? "bg-orange-500" :
                      article.category === "Entertainment" ? "bg-pink-500" :
                      article.category === "Health" ? "bg-teal-500" :
                      "bg-gray-500"
                    }`}>
                      {article.category}
                    </span>
                    
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                    
                    <span>Published {article.publishedAt}</span>
                    
                    {fullArticle?.updatedAt && (
                      <span>Updated {fullArticle.updatedAt}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center mb-8">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={article.author.avatar} alt={article.author.name} />
                      <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{article.author.name}</div>
                      <div className="text-sm text-news-gray-500">
                        <Link to="#" className="hover:text-news-primary">@{article.author.name.toLowerCase().replace(/\s+/g, '')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Featured Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Article Actions */}
                <div className="bg-news-gray-50 dark:bg-news-gray-800 px-6 md:px-8 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        hasLiked 
                          ? 'bg-news-primary/10 text-news-primary' 
                          : 'hover:bg-news-gray-100 dark:hover:bg-news-gray-700'
                      }`}
                      onClick={handleLike}
                      aria-label={hasLiked ? "Unlike this article" : "Like this article"}
                    >
                      <ThumbsUp size={16} className={hasLiked ? "fill-current" : ""} />
                      <span>{likeCount}</span>
                    </button>
                    
                    <a 
                      href="#comments" 
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-sm hover:bg-news-gray-100 dark:hover:bg-news-gray-700"
                      aria-label="Go to comments"
                    >
                      <MessageSquare size={16} />
                      <span>{comments.length}</span>
                    </a>
                    
                    <button
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        isBookmarked 
                          ? 'bg-news-primary/10 text-news-primary' 
                          : 'hover:bg-news-gray-100 dark:hover:bg-news-gray-700'
                      }`}
                      onClick={handleBookmark}
                      aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
                    >
                      {isBookmarked 
                        ? <BookmarkCheck size={16} className="fill-current" /> 
                        : <Bookmark size={16} />}
                      <span>{isBookmarked ? "Saved" : "Save"}</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1.5 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-700 text-news-gray-600 dark:text-news-gray-400"
                      onClick={() => handleShare("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={16} />
                    </button>
                    
                    <button
                      className="p-1.5 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-700 text-news-gray-600 dark:text-news-gray-400"
                      onClick={() => handleShare("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={16} />
                    </button>
                    
                    <button
                      className="p-1.5 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-700 text-news-gray-600 dark:text-news-gray-400"
                      onClick={() => handleShare("linkedin")}
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={16} />
                    </button>
                    
                    <button
                      className="p-1.5 rounded-full hover:bg-news-gray-100 dark:hover:bg-news-gray-700 text-news-gray-600 dark:text-news-gray-400"
                      onClick={() => handleShare("copy")}
                      aria-label="Copy link"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6 md:p-8">
                  <div className="article-excerpt text-xl mb-8 font-medium text-news-gray-700 dark:text-news-gray-300">
                    {article.excerpt}
                  </div>
                  
                  {fullArticle ? (
                    <div 
                      className="article-content prose prose-lg max-w-none dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: fullArticle.content }}
                    />
                  ) : (
                    <div className="article-content prose prose-lg max-w-none dark:prose-invert">
                      <p>{article.content}</p>
                      
                      {/* Placeholder content for articles without full content */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl.</p>
                      
                      <h2>The Impact on Global Markets</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl.</p>
                      
                      <p>Mauris id fermentum nulla. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl:</p>
                      <ul>
                        <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                        <li>Ut venenatis tellus in metus vulputate</li>
                        <li>Phasellus volutpat neque ac dui mattis</li>
                        <li>Etiam luctus porttitor lorem, sed suscipit est rutrum</li>
                      </ul>
                      
                      <h2>Looking Ahead</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl.</p>
                      
                      <blockquote>
                        <p>The decisions made today will have far-reaching consequences for generations to come. We cannot afford to wait any longer.</p>
                      </blockquote>
                      
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel ultricies nisl nisl vel nisl.</p>
                    </div>
                  )}
                  
                  {/* Article Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-2">Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                          <Link 
                            key={tag} 
                            to={`/tag/${tag}`}
                            className="bg-news-gray-100 dark:bg-news-gray-800 px-3 py-1 rounded-full text-sm hover:bg-news-gray-200 dark:hover:bg-news-gray-700 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Sources */}
                  {fullArticle?.sources && fullArticle.sources.length > 0 && (
                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-lg font-bold mb-2">Sources</h3>
                      <ul className="list-disc pl-5">
                        {fullArticle.sources.map(source => (
                          <li key={source.name}>
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-news-primary hover:underline"
                            >
                              {source.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Author Bio */}
                  <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-bold mb-4">About the Author</h3>
                    <div className="flex items-start">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={article.author.avatar} alt={article.author.name} />
                        <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{article.author.name}</h4>
                        <p className="text-news-gray-600 dark:text-news-gray-400">
                          {fullArticle?.author.bio || "Writer at InstaNews Pulse covering a range of topics including politics, business, and technology."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comments Section */}
                  <div id="comments" className="mt-12 border-t pt-8">
                    <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
                    
                    <form onSubmit={handleSubmitComment} className="mb-8">
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Your Avatar" />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <textarea
                            className="w-full p-3 border border-news-gray-300 dark:border-news-gray-700 rounded-lg focus:ring-2 focus:ring-news-primary focus:border-transparent"
                            rows={3}
                            placeholder="Add a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          ></textarea>
                          <div className="flex justify-end mt-2">
                            <Button type="submit" disabled={!commentText.trim()}>
                              Post Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                    
                    <div className="space-y-6">
                      {comments.map(comment => (
                        <div key={comment.id} className="flex gap-4">
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarImage src={comment.avatar} alt={comment.author} />
                            <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-grow bg-news-gray-50 dark:bg-news-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold">{comment.author}</h4>
                                <span className="text-sm text-news-gray-500">{comment.timestamp}</span>
                              </div>
                              <button className="text-news-gray-400 hover:text-news-gray-600 dark:hover:text-news-gray-300">
                                <ThumbsUp size={14} /> {comment.likes}
                              </button>
                            </div>
                            <p className="mt-2">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map(relatedArticle => (
                      <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <SidePanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
