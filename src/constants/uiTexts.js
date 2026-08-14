// ─── Owner / Contact ────────────────────────────────────────────────────────
export const OWNER = {
  name: "editverse",
  email: String.fromCharCode(112, 114, 97, 109, 105, 116, 46, 48, 57, 48, 52, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109),
  location: "Pune, Maharashtra, India",
  instagram: {
    handle: "@editverse_x",
    url: "https://instagram.com/_editverse_x",
  },
  whatsapp: {
    number: "+91 7041887184",
    url: "https://wa.me/917041887184?text=Hi%2C%20I%20want%20to%20discuss%20a%20video%20editing%20project",
  },
};

// ─── Site-wide ───────────────────────────────────────────────────────────────
export const SITE = {
  brandName: "editverse",
  copyright: "Creative Video Portfolio",
  copyrightTagline: "Crafted with passion for visual storytelling",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  { id: "contact", label: "Contact", path: "/#contact" },
];

// ─── Hero Section ────────────────────────────────────────────────────────────
export const HERO = {
  tagline: "Scroll-stopping reels & cinematic edits that drive retention",
  ctaPrimary: "View My Work",
  ctaSecondary: "Start a Project",
  videoBgVimeoId: "1158649716",
};

// ─── Showreel (Index page) ───────────────────────────────────────────────────
export const SHOWREEL = {
  vimeoId: "1158649716",
  get embedUrl() {
    return `https://player.vimeo.com/video/${this.vimeoId}`;
  },
  heading: "Latest",
  headingAccent: "Showreel",
  subtitle: "Discover my most recent creative work and visual storytelling",
};

// ─── About Section ───────────────────────────────────────────────────────────
export const ABOUT = {
  heading: "About",
  headingAccent: "Me",
  subtitle: "Passionate visual storyteller crafting compelling narratives through the lens",
  journeyTitle: "My Journey",
  journeyParagraphs: [
    {
      plain: "With over ",
      accent1: "2.5+ years",
      mid1: " of experience in visual storytelling, I've mastered the art of transforming ideas into ",
      accent2: "compelling visual narratives",
      end: ".",
    },
    {
      plain: "Specializing in ",
      accent1: "creative editing techniques",
      mid1: " and ",
      accent2: "cinematic storytelling",
      end: ", I bring unique perspectives to every project.",
    },
  ],
  softwareTitle: "Tools & Software",
  ctaTitle: "Ready to Create Something Amazing?",
  ctaSubtitle: "Let's collaborate and bring your vision to life.",
  ctaButton: "Let's Connect",
};

// ─── Stats (replaces old skill bars) ─────────────────────────────────────────
export const STATS_SECTION = {
  heading: "The Numbers",
  headingAccent: "Speak",
};

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "", label: "Brands Served" },
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "M+", label: "Total Views" },
];

export const SOFTWARE = [
  { name: "After Effects", icon: "Ae", color: "from-purple-600 to-blue-600" },
  { name: "Premiere Pro", icon: "Pr", color: "from-purple-600 to-pink-600" },
  { name: "CapCut", icon: "Cc", color: "from-gray-600 to-gray-800" },
];

// ─── Brands Section ──────────────────────────────────────────────────────────
export const BRANDS_SECTION = {
  heading: "Trusted by",
  headingAccent: "Amazing Brands",
  subtitle: "Collaborating with innovative brands to create compelling visual stories",
  ctaTitle: "Ready to Join These",
  ctaTitleAccent: "Success Stories?",
  ctaSubtitle: "Let's create compelling visual content for your brand.",
  ctaButton: "Start Your Project",
};

export const BRANDS = [
  { name: "Bartisans", img: "/brands/bartisans.jpg", url: "https://www.instagram.com/bartisans.in/", category: "Hospitality" },
  { name: "eatmurukku", img: "/brands/murukku.jpg", url: "https://www.instagram.com/eatmurukku/", category: "Hospitality" },
  { name: "Kytvhens", img: "/brands/kytchens.jpg", url: "https://www.instagram.com/kytchens/", category: "Hospitality" },
  { name: "Eagle Boys", img: "/brands/eagleboys.jpg", url: "https://www.instagram.com/eagleboys_pizzeria.loni/", category: "Food & Beverage" },
  { name: "The Fitness Empire", img: "/brands/fitnessempire.jpg", url: "https://www.instagram.com/fitness_empire_loni_kalbhor/", category: "Health & Fitness" },
  { name: "The Soulvard", img: "/brands/thesoulvard.jpg", url: "https://www.instagram.com/thesoulvard/", category: "Lifestyle" },
  { name: "Meditourz", img: "/brands/meditourz.jpg", url: "https://www.instagram.com/meditourz/", category: "Healthcare" },
];

// ─── Portfolio Page ───────────────────────────────────────────────────────────
export const PORTFOLIO = {
  heading: "My",
  headingAccent: "Portfolio",
  subtitle: "A showcase of creative video content across different formats and platforms",
  longForm: {
    heading: "Long Form Content",
    subtitle: "Featured video edits showcasing creative storytelling and professional production quality",
  },
  vertical: {
    heading: "Vertical Content",
    subtitle: "Vertical format content designed for maximum engagement across social platforms",
  },
  cta: {
    heading: "Ready to Create Your",
    headingAccent: "Next Project?",
    subtitle: "Let's collaborate and bring your creative vision to life with professional video content.",
    button: "Start Your Project",
  },
};

// ─── YouTube Videos ───────────────────────────────────────────────────────────
export const YOUTUBE_VIDEOS = [
  { id: "xjb1SzUb4rU", title: "Restaurant Promo — Bartisans", description: "Cinematic food & ambiance reel for Pune's popular cocktail bar", client: "Bartisans", category: "Brand Content" },
  { id: "nWuKVOo50aY", title: "Fitness Transformation Edit", description: "High-energy workout montage with dynamic transitions", client: "Fitness Empire", category: "Health & Fitness" },
  { id: "64M463Dn14Q", title: "Cinematic Travel Story", description: "Narrative-driven travel video with color grading & sound design", client: "Personal Project", category: "Storytelling" },
  { id: "cgquyjJJ6MA", title: "Brand Commercial — Soulvard", description: "Lifestyle brand commercial with premium visual aesthetics", client: "The Soulvard", category: "Lifestyle" },
];

// ─── Reels / Vertical Videos ─────────────────────────────────────────────────
export const REEL_CATEGORIES = [
  { key: "Lifestyle", label: "Lifestyle" },
  { key: "Fitness", label: "Fitness" },
  { key: "Micro-Learning", label: "Micro-Learning" },
  { key: "UGC Ads", label: "UGC Ads" },
  { key: "Real Estate", label: "Real Estate" },
  { key: "concert", label: "Concert" },
];

const vimeoUrl = (id) =>
  `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;

export const REELS = [
  //lifestyle
  { id: "c2", category: "Lifestyle", vimeoId: "1107158436", title: "Model/Fashion Shoot Edit", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "c3", category: "Lifestyle", vimeoId: "1179918912", title: "Trending Edit", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "e2", category: "Lifestyle", vimeoId: "1179919960", title: "Event 2", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  //Micro-Learning
  { id: "i2", category: "Micro-Learning", vimeoId: "1179917602", title: "Info Reel 2", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "i3", category: "Micro-Learning", vimeoId: "1199116542", title: "Info Reel 3", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  //UGC ads
  { id: "o4", category: "UGC Ads", vimeoId: "1204760033", title: "Skincare Promo", get embedUrl() { return vimeoUrl(this.vimeoId); } },

  { id: "o5", category: "UGC Ads", vimeoId: "1204760032", title: "Fashion Outfit", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  //Fitness
  { id: "o1", category: "Fitness", vimeoId: "1106914506", title: "Other Edit 1", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "o2", category: "Fitness", vimeoId: "1136422943", title: "Fitness Reel", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  //Real Estate
  { id: "o3", category: "Real Estate", vimeoId: "1137229787", title: "Real Estate-1", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "re2", category: "Real Estate", vimeoId: "1211129693", title: "Real Estate-2", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "re3", category: "Real Estate", vimeoId: "1207097087", title: "Real Estate-3", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  //concert
  { id: "e1", category: "concert", vimeoId: "1129288199", title: "Event 1", get embedUrl() { return vimeoUrl(this.vimeoId); } },

];

// ─── 404 Page ────────────────────────────────────────────────────────────────
export const NOT_FOUND = {
  heading: "404",
  message: "Oops! Page not found",
  backLabel: "Return to Home",
  backPath: "/",
};

// ─── Testimonials ────────────────────────────────────────────────────────────
export const TESTIMONIALS_SECTION = {
  heading: "What Clients",
  headingAccent: "Say",
  subtitle: "Trusted by brands to deliver scroll-stopping content",
};

export const TESTIMONIALS = [
  {
    quote: "editverse transformed our brand's social presence with stunning reels that consistently drive engagement and new customers.",
    name: "Restaurant Owner",
    company: "Bartisans",
    category: "Hospitality",
  },
  {
    quote: "Professional, creative, and always on time. The video quality exceeded our expectations and boosted our social media reach significantly.",
    name: "Fitness Trainer",
    company: "The Fitness Empire",
    category: "Health & Fitness",
  },
  {
    quote: "The cinematic edits and storytelling approach made our brand stand out. Highly recommend for anyone looking for premium video content.",
    name: "Brand Manager",
    company: "The Soulvard",
    category: "Lifestyle",
  },
  {
    quote: "From concept to delivery, the entire process was smooth. The final product was exactly what we envisioned, but better.",
    name: "Marketing Head",
    company: "Meditourz",
    category: "Healthcare",
  },
];

// ─── Process / How I Work ───────────────────────────────────────────────────
export const PROCESS = {
  heading: "How I",
  headingAccent: "Work",
  subtitle: "A streamlined process from concept to delivery",
  steps: [
    { number: "01", title: "Briefing", description: "We discuss your vision, goals, and target audience", icon: "MessageSquare" },
    { number: "02", title: "Editing", description: "I craft the edit with creative precision and storytelling", icon: "Film" },
    { number: "03", title: "Review", description: "You review the draft and share feedback for revisions", icon: "Eye" },
    { number: "04", title: "Delivery", description: "Final polished files delivered, ready to publish", icon: "Rocket" },
  ],
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  exploreTitle: "Explore",
  connectTitle: "Let's Connect",
  indexTitle: "Let's Create Together",
  indexSubtitle: "Ready to bring your vision to life?",
};
