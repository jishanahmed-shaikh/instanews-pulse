import { ClockIcon } from "lucide-react";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
};

export const categories = [
  "World",
  "Politics",
  "Business",
  "Tech",
  "Sports",
  "Entertainment",
  "Health",
];

export const trendingTopics = [
  { id: "elections", label: "#Elections2025", active: true },
  { id: "ai", label: "#AIRevolution", active: false },
  { id: "worldcup", label: "#WorldCup", active: false },
  { id: "stocks", label: "#StockSurge", active: false },
  { id: "climate", label: "#ClimateAlert", active: false },
  { id: "spacex", label: "#SpaceXLaunch", active: false },
  { id: "crypto", label: "#CryptoMarket", active: false },
  { id: "olympics", label: "#Olympics2025", active: false }
];

export const articles: Article[] = [
  {
    id: "article-1",
    title: "Global Leaders Convene for Climate Summit as Temperatures Soar",
    excerpt: "World leaders meet in Geneva for emergency talks amid record-breaking heatwaves across continents.",
    content: "GENEVA — An emergency climate summit convened Tuesday as world leaders gathered to address the increasingly dire global temperature records being shattered worldwide. The United Nations Secretary-General called the meeting \"perhaps our last opportunity to prevent catastrophic warming\" as scientists reported that July 2025 was the hottest month ever recorded in human history.\n\nAttendees included representatives from over 130 countries, with major carbon-emitting nations facing increasing pressure to accelerate their transition away from fossil fuels. The summit comes just days after devastating wildfires swept through southern Europe and unprecedented flooding displaced millions across South Asia.",
    category: "World",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    trending: true,
    tags: ["climate", "summit", "global"]
  },
  {
    id: "article-2",
    title: "Revolutionary AI Model Can Predict Stock Market Trends With 89% Accuracy",
    excerpt: "New artificial intelligence system shows unprecedented ability to forecast market movements.",
    content: "A groundbreaking artificial intelligence model developed by researchers at MIT and Stanford has demonstrated an extraordinary 89% accuracy rate in predicting stock market trends, potentially revolutionizing financial forecasting and investment strategies.\n\nThe AI system, named MarketMind, analyzes billions of data points from financial markets, social media sentiment, economic indicators, and global events to make its predictions. Unlike previous models that relied primarily on technical analysis, MarketMind integrates natural language processing to understand market psychology and investor behavior.\n\n\"This represents a quantum leap in financial prediction technology,\" explained Dr. Sarah Chen, lead researcher on the project. \"While no system can be 100% accurate in predicting markets, MarketMind's performance significantly outpaces both human analysts and existing algorithmic trading systems.\"",
    category: "Tech",
    author: {
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    publishedAt: "5 hours ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    trending: true,
    tags: ["ai", "stocks", "technology"]
  },
  {
    id: "article-3",
    title: "Election Polls Indicate Tight Race in Swing States",
    excerpt: "Latest polling data shows candidates neck-and-neck in key battleground states.",
    content: "WASHINGTON — With less than three months until the presidential election, new polling data released today indicates an extraordinarily tight race in key battleground states that will likely determine the outcome in November.\n\nAccording to the latest survey conducted by Gallup, the two major candidates are within the margin of error of each other in Pennsylvania, Michigan, Wisconsin, Arizona, and Georgia. Political analysts suggest that unprecedented voter turnout will be crucial for both campaigns.\n\n\"We're seeing engagement levels that eclipse even the historic 2020 election,\" noted political strategist James Wilson. \"Both campaigns are investing heavily in ground operations and digital outreach to mobilize every possible supporter in these decisive states.\"",
    category: "Politics",
    author: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    publishedAt: "1 day ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    trending: true,
    tags: ["elections", "politics", "polls"]
  },
  {
    id: "article-4",
    title: "Major Tech Company Announces Groundbreaking VR Headset",
    excerpt: "Next-generation virtual reality device promises unprecedented immersion and comfort.",
    content: "CUPERTINO — A leading technology company unveiled its much-anticipated VR headset today, promising a revolution in virtual reality experiences that could transform entertainment, education, and remote work.\n\nThe new device, named \"HorizonX,\" weighs just 250 grams—less than half the weight of most competing headsets—while offering 8K resolution per eye, a 210-degree field of view, and advanced haptic feedback. The company claims its proprietary \"neural rendering\" technology eliminates motion sickness by precisely matching visual cues with the brain's vestibular system.\n\n\"This isn't just an incremental improvement—it's a fundamentally new approach to immersive experiences,\" said Sarah Chen, Chief Innovation Officer, during the livestreamed announcement. \"HorizonX dissolves the boundary between digital and physical reality in ways that were previously impossible.\"",
    category: "Tech",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    publishedAt: "3 days ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1600&auto=format&fit=crop",
    featured: true,
    tags: ["vr", "tech", "innovation"]
  },
  {
    id: "article-5",
    title: "Global Stock Markets Hit Record Highs Following Economic Report",
    excerpt: "Investors celebrate as markets surge in response to stronger-than-expected economic indicators.",
    content: "NEW YORK — Global stock markets surged to all-time highs today following the release of economic data showing unexpectedly strong growth across major economies despite persistent inflation concerns.\n\nThe Dow Jones Industrial Average jumped 2.3%, while the Nasdaq Composite gained 3.1% to close at a record high. European and Asian markets followed suit, with Japan's Nikkei 225 rising 2.7% and Germany's DAX advancing 2.4%.\n\nAnalysts attribute the rally to better-than-expected employment figures in the United States and manufacturing data from China that suggested the world's two largest economies continue to expand despite monetary tightening measures implemented over the past year.",
    category: "Business",
    author: {
      name: "Michael Chang",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["stocks", "markets", "economy"]
  },
  {
    id: "article-6",
    title: "National Soccer Team Advances to World Cup Semi-Finals",
    excerpt: "Historic victory sets up dramatic showdown with reigning champions next week.",
    content: "DOHA — In a thrilling match that captivated millions worldwide, the national soccer team secured their place in the World Cup semi-finals with a dramatic 2-1 victory over the tournament favorites on Tuesday night.\n\nThe historic win came after a tense match that remained deadlocked until the 87th minute, when striker Carlos Mendez scored what will likely become one of the most celebrated goals in the nation's sporting history.\n\n\"This team has shown extraordinary heart and determination,\" said head coach Luis Ramirez in the post-match press conference. \"We've proven that we belong among the world's elite teams, and we're not finished yet.\"\n\nThe semi-final match against the defending champions will take place next Tuesday, with the winner advancing to the World Cup final for the opportunity to lift the most coveted trophy in international sports.",
    category: "Sports",
    author: {
      name: "Carlos Mendez",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    publishedAt: "1 day ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["worldcup", "soccer", "sports"]
  },
  {
    id: "article-7",
    title: "New Study Links Regular Exercise to Improved Mental Health",
    excerpt: "Research finds significant benefits for depression and anxiety from consistent physical activity.",
    content: "LONDON — A comprehensive study published today in The Lancet Psychiatry has found substantial evidence that regular exercise significantly reduces symptoms of depression and anxiety, potentially offering a powerful tool for mental health treatment and prevention.\n\nThe research, which analyzed data from over 30,000 participants across 15 countries, found that people who engaged in at least 150 minutes of moderate physical activity weekly were 30% less likely to develop depression and 45% less likely to experience anxiety disorders compared to sedentary individuals.\n\n\"What's particularly encouraging is that the mental health benefits were consistent across different types of exercise,\" explained Dr. Jessica Patel, the study's lead author. \"Whether participants preferred running, swimming, cycling, or simply walking, the positive impact on mental wellbeing was remarkably similar.\"",
    category: "Health",
    author: {
      name: "Jessica Patel",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    publishedAt: "2 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
    tags: ["health", "fitness", "mentalhealth"]
  },
  {
    id: "article-8",
    title: "Streaming Service Announces Highly Anticipated Fantasy Series",
    excerpt: "Adaptation of beloved book series begins production with star-studded cast.",
    content: "LOS ANGELES — A major streaming platform announced today that production has begun on its adaptation of the internationally bestselling fantasy series \"Chronicles of the Eternal Realm,\" with an ensemble cast featuring some of Hollywood's most acclaimed actors.\n\nThe series, which has sold over 50 million copies worldwide and been translated into 42 languages, will receive an unprecedented production budget of $25 million per episode, making it one of the most expensive television productions in history.\n\n\"We're committed to creating a visual experience that honors the incredible world and characters that millions of readers have come to love,\" said executive producer Thomas Wright. \"With the technology now available and the incredible talent involved both in front of and behind the camera, we believe we can bring this epic story to life in a way that will satisfy existing fans while welcoming new audiences.\"",
    category: "Entertainment",
    author: {
      name: "Thomas Wright",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    publishedAt: "3 days ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1600&auto=format&fit=crop",
    tags: ["tv", "entertainment", "streaming"]
  },
  {
    id: "article-9",
    title: "SpaceX Successfully Launches Mission to Mars",
    excerpt: "Historic milestone in space exploration as private company lands on the red planet.",
    content: "CAPE CANAVERAL — In what experts are calling a watershed moment in human space exploration, SpaceX successfully launched and landed an uncrewed spacecraft on Mars today, becoming the first private company to reach the red planet.\n\nThe Odyssey spacecraft, carrying scientific instruments and technology demonstration payloads, launched from Kennedy Space Center four months ago and executed a precise landing in Mars' Arcadia Planitia region, a relatively flat area selected for its scientific interest and landing safety.\n\n\"Today we've taken a significant step toward making humanity a multi-planetary species,\" said SpaceX founder Elon Musk during a press conference following confirmation of the successful landing. \"This mission demonstrates that access to deep space is no longer the exclusive domain of government agencies.\"",
    category: "Tech",
    author: {
      name: "Olivia Johnson",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    publishedAt: "2 hours ago",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["spacex", "mars", "space"]
  },
  {
    id: "article-10",
    title: "Cryptocurrency Market Sees Massive Gains Following Regulatory Clarity",
    excerpt: "Bitcoin and other digital currencies surge as government provides clearer guidelines.",
    content: "NEW YORK — The cryptocurrency market experienced its largest single-day rally in over three years following the announcement of comprehensive regulatory guidelines that investors and industry leaders have described as \"surprisingly supportive\" of digital asset innovation.\n\nBitcoin surged more than 15% to briefly touch $80,000 before settling around $78,500, while Ethereum jumped nearly 20% to reach $5,200. Overall cryptocurrency market capitalization increased by approximately $400 billion in just 24 hours.\n\nThe regulatory framework, jointly developed by the Securities and Exchange Commission and the Commodity Futures Trading Commission, establishes clear distinctions between different types of digital assets and provides specific compliance pathways for cryptocurrency businesses operating in the United States.",
    category: "Business",
    author: {
      name: "Ryan Park",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    publishedAt: "12 hours ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["crypto", "bitcoin", "finance"]
  },
  {
    id: "article-11",
    title: "Olympic Committee Announces New Sports for 2028 Games",
    excerpt: "Skateboarding, breaking, and climbing to be joined by several new competitive events.",
    content: "LAUSANNE — The International Olympic Committee announced today that the 2028 Summer Olympics in Los Angeles will feature several new sports, continuing the organization's efforts to attract younger audiences and reflect evolving global sporting interests.\n\nJoining the Olympic program will be cricket (in its T20 format), flag football, squash, and lacrosse, while skateboarding, sport climbing, and breaking—all introduced in recent Games—will remain on the program.\n\n\"These additions reflect our commitment to embracing sports that are popular with younger generations while honoring the great diversity of sporting traditions around the world,\" said IOC President Thomas Bach during the announcement in Switzerland.",
    category: "Sports",
    author: {
      name: "Emma Thompson",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    publishedAt: "1 day ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["olympics", "sports", "games"]
  },
  {
    id: "article-12",
    title: "Breakthrough in Renewable Energy Storage Could Accelerate Green Transition",
    excerpt: "Scientists develop high-capacity battery technology that promises to solve intermittency issues.",
    content: "BERKELEY — Researchers at the University of California, Berkeley have announced a breakthrough in energy storage technology that could solve one of the most persistent challenges in renewable energy: efficiently storing power generated from intermittent sources like wind and solar.\n\nThe new battery technology, which utilizes abundant and low-cost materials including aluminum and sulfur, can reportedly store electricity at less than 20% of the cost of current lithium-ion batteries while offering up to three times the energy density and significantly longer operational lifespans.\n\n\"This represents a step-change in energy storage capabilities,\" explained Dr. David Kim, lead researcher on the project. \"If we can scale this technology as we believe possible, it has the potential to dramatically accelerate the transition to renewable energy by making wind and solar power dispatchable and reliable 24/7.\"",
    category: "Tech",
    author: {
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    publishedAt: "3 days ago",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    tags: ["energy", "climate", "technology"]
  },
  {
    id: "article-13",
    title: "Innovative Urban Farming Project Transforms City Rooftops",
    excerpt: "Community-led initiative converts unused spaces into productive gardens, addressing food insecurity.",
    content: "CHICAGO — An innovative urban farming project is transforming rooftops across the city into productive agricultural spaces, providing fresh produce to communities with limited access to healthy food options.\n\nThe initiative, called 'Rooftop Roots,' has already converted over 50 previously unused rooftop spaces into thriving gardens that collectively produce more than 25,000 pounds of vegetables annually. The project employs hydroponic and vertical farming techniques to maximize yield in limited spaces.\n\n\"Many neighborhoods in our city qualify as food deserts, where residents have to travel significant distances to access fresh produce,\" explained Maria Gonzalez, founder of Rooftop Roots. \"By growing food right in these communities, we're not only addressing food insecurity but also creating green jobs and educational opportunities.\"",
    category: "Health",
    author: {
      name: "Maria Gonzalez",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    publishedAt: "4 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1600&auto=format&fit=crop",
    tags: ["health", "sustainability", "community"]
  },
  {
    id: "article-14",
    title: "Quantum Computing Breakthrough Solves Previously Impossible Problem",
    excerpt: "Researchers demonstrate quantum advantage by solving complex protein folding calculation in minutes.",
    content: "ZÜRICH — Researchers at a leading quantum computing lab have achieved what many consider a definitive demonstration of quantum advantage by solving a complex protein folding problem that would take conventional supercomputers thousands of years to complete.\n\nThe team's 256-qubit quantum processor completed the calculation in just 3 minutes and 42 seconds, potentially accelerating drug discovery and materials science research by orders of magnitude.\n\n\"This isn't just an academic exercise in computational superiority,\" noted Dr. Wei Zhang, lead researcher on the project. \"Protein folding calculations are essential for understanding diseases and developing new treatments. What we've demonstrated could dramatically accelerate biomedical research in ways that directly benefit human health.\"",
    category: "Tech",
    author: {
      name: "Wei Zhang",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    publishedAt: "1 day ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop",
    tags: ["quantum", "technology", "science"]
  },
  {
    id: "article-15",
    title: "Record-Breaking Artwork Signals NFT Market Revival",
    excerpt: "Digital masterpiece sells for $28.3 million as collectors return to blockchain-based art market.",
    content: "NEW YORK — A digital artwork by acclaimed artist Maya Patel sold for a record-breaking $28.3 million yesterday, signaling what many market observers consider a revival of the non-fungible token (NFT) art market after its decline in 2023.\n\nThe piece, titled \"Recursions in Digital Memory,\" combines procedurally generated elements with hand-crafted digital painting in what critics have described as a groundbreaking fusion of algorithmic and human creativity.\n\n\"What we're seeing isn't just a return to the speculative frenzy of 2021,\" explained art market analyst Jonathan Kim. \"The market has matured significantly, with collectors now focusing on pieces with genuine artistic merit and innovation rather than simply chasing trends or celebrity endorsements.\"",
    category: "Entertainment",
    author: {
      name: "Jonathan Kim",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    publishedAt: "5 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
    trending: true,
    tags: ["art", "nft", "digital"]
  },
  {
    id: "article-16",
    title: "New Archaeological Discovery Rewrites Human Migration Timeline",
    excerpt: "Ancient settlement in South America dates human presence 15,000 years earlier than previously believed.",
    content: "SANTIAGO — A team of archaeologists has uncovered evidence of human habitation in southern Chile dating back approximately 45,000 years, potentially rewriting the timeline of human migration to the Americas by pushing back the earliest known settlement by more than 15,000 years.\n\nThe site, named 'Monte Victoria,' contains sophisticated stone tools, hearth remains, and human DNA that challenges the long-held theory that humans first arrived in the Americas around 16,000-25,000 years ago via the Bering land bridge.\n\n\"This discovery forces us to reconsider everything we thought we knew about when and how humans populated the Americas,\" stated Dr. Isabella Ramirez, lead archaeologist on the excavation. \"The evidence suggests either a much earlier crossing via the Bering region or possibly alternative migration routes that we haven't fully considered.\"",
    category: "World",
    author: {
      name: "Isabella Ramirez",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    publishedAt: "3 days ago",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1600&auto=format&fit=crop",
    tags: ["archaeology", "history", "science"]
  },
  {
    id: "article-17",
    title: "Innovative Satellite Network Provides Internet to Remote Regions",
    excerpt: "New constellation brings high-speed connectivity to previously unserved communities worldwide.",
    content: "KIGALI — A groundbreaking satellite network has begun providing high-speed internet access to some of the world's most remote regions, connecting communities that have never before had reliable access to digital resources.\n\nThe constellation of 120 low-Earth orbit satellites, developed by telecommunications company GlobalConnect, is specifically designed to prioritize coverage for regions that traditional internet infrastructure has been unable to reach due to geographic or economic constraints.\n\n\"This isn't just about streaming videos or social media,\" explained Amara Okafor, director of GlobalConnect's humanitarian initiatives. \"For remote communities, internet access means telemedicine when the nearest doctor is hundreds of miles away. It means educational resources for schools with few textbooks. It means economic opportunities through digital work and commerce.\"",
    category: "Tech",
    author: {
      name: "Amara Okafor",
      avatar: "https://i.pravatar.cc/150?img=17"
    },
    publishedAt: "2 days ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1600&auto=format&fit=crop",
    tags: ["technology", "connectivity", "development"]
  },
  {
    id: "article-18",
    title: "Major Fashion Brands Commit to Zero-Waste Manufacturing",
    excerpt: "Industry leaders pledge to eliminate waste and cut carbon emissions by 2030.",
    content: "MILAN — In a coordinated announcement that signals a potential paradigm shift for the fashion industry, twelve major global brands have committed to implementing zero-waste manufacturing processes and carbon-neutral operations by 2030.\n\nThe coalition, which includes some of the world's largest apparel manufacturers and retailers, will invest collectively over $3 billion in developing circular production systems, renewable energy infrastructure, and advanced recycling technologies.\n\n\"The fashion industry has historically been one of the world's most wasteful and polluting sectors,\" acknowledged Marco Rossi, CEO of Italian luxury conglomerate Gruppo Moda and spokesperson for the coalition. \"This commitment represents an acknowledgment of our responsibility to transform how we operate and lead the way toward truly sustainable practices.\"",
    category: "Business",
    author: {
      name: "Marco Rossi",
      avatar: "https://i.pravatar.cc/150?img=18"
    },
    publishedAt: "1 day ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    tags: ["fashion", "sustainability", "business"]
  }
];

export const mostReadArticles = articles.slice(0, 5);
export const editorsPicks = [articles[2], articles[5], articles[8]];
export const featuredArticles = articles.filter(article => article.featured);
export const trendingArticles = articles.filter(article => article.trending);
export const latestArticles = [...articles].sort(() => 0.5 - Math.random());
