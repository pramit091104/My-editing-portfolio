// ─── Owner / Contact ────────────────────────────────────────────────────────
export const OWNER = {
  name: "editverse",
  email: "pramit.0904@gmail.com",
  location: "Pune, Maharashtra, India",
  instagram: {
    handle: "@editverse_x",
    url: "https://instagram.com/_editverse_x",
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
  { id: "home",      label: "Home",      path: "/" },
  { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  { id: "contact",   label: "Contact",   path: "/#contact" },
];

// ─── Hero Section ────────────────────────────────────────────────────────────
export const HERO = {
  tagline: "Transforming your ideas into compelling visual narratives",
};

// ─── Showreel (Index page) ───────────────────────────────────────────────────
export const SHOWREEL = {
  vimeoId: "1158649716",
  get embedUrl() {
    return `https://player.vimeo.com/video/${this.vimeoId}`;
  },
  heading:  "Latest",
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
  skillsTitle: "Skills & Expertise",
  softwareTitle: "Tools & Software",
  ctaTitle: "Ready to Create Something Amazing?",
  ctaSubtitle: "Let's collaborate and bring your vision to life.",
  ctaButton: "Let's Connect",
};

export const SKILLS = [
  { name: "Videography",    level: 95 },
  { name: "Cinematography", level: 90 },
  { name: "Reels/Shorts",   level: 98 },
  { name: "Long Video",     level: 85 },
  { name: "Storytelling",   level: 92 },
  { name: "Color Grading",  level: 88 },
];

export const SOFTWARE = [
  { name: "After Effects", icon: "Ae", color: "from-purple-600 to-blue-600" },
  { name: "Premiere Pro",  icon: "Pr", color: "from-purple-600 to-pink-600" },
  { name: "CapCut",        icon: "Cc", color: "from-gray-600 to-gray-800"   },
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
  { name: "Bartisans",         img: "/brands/bartisans.jpg",     url: "https://www.instagram.com/bartisans.in/",                    category: "Hospitality"     },
  { name: "eatmurukku",        img: "/brands/murukku.jpg",       url: "https://www.instagram.com/eatmurukku/",                      category: "Hospitality"     },
  { name: "Kytvhens",          img: "/brands/kytchens.jpg",      url: "https://www.instagram.com/kytchens/",                        category: "Hospitality"     },
  { name: "Eagle Boys",        img: "/brands/eagleboys.jpg",     url: "https://www.instagram.com/eagleboys_pizzeria.loni/",          category: "Food & Beverage" },
  { name: "The Fitness Empire",img: "/brands/fitnessempire.jpg", url: "https://www.instagram.com/fitness_empire_loni_kalbhor/",     category: "Health & Fitness"},
  { name: "The Soulvard",      img: "/brands/thesoulvard.jpg",   url: "https://www.instagram.com/thesoulvard/",                     category: "Lifestyle"       },
  { name: "Meditourz",         img: "/brands/meditourz.jpg",     url: "https://www.instagram.com/meditourz/",                       category: "Healthcare"      },
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
  { id: "xjb1SzUb4rU", title: "Creative Video Edit"    },
  { id: "nWuKVOo50aY", title: "Professional Production" },
  { id: "64M463Dn14Q", title: "Cinematic Storytelling"  },
  { id: "cgquyjJJ6MA", title: "Visual Narrative"        },
];

// ─── Reels / Vertical Videos ─────────────────────────────────────────────────
export const REEL_CATEGORIES = [
  { key: "Trending",    label: "Trending"    },
  { key: "informative", label: "Informative" },
  { key: "events",      label: "Events"      },
  { key: "others",      label: "Others"      },
];

const vimeoUrl = (id) =>
  `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;

export const REELS = [
  { id: "c1", category: "Trending",    vimeoId: "1107162548", title: "Model/Fashion Shoot Edit", get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "c2", category: "Trending",    vimeoId: "1107158436", title: "Cafe Vibes Edit",           get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "c3", category: "Trending",    vimeoId: "1179918912", title: "Trending Edit",             get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "i1", category: "informative", vimeoId: "1136422943", title: "Info Reel 1",               get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "i2", category: "informative", vimeoId: "1179917602", title: "Info Reel 2",               get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "e1", category: "events",      vimeoId: "1129288199", title: "Event 1",                   get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "e2", category: "events",      vimeoId: "1179919960", title: "Event 2",                   get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "o1", category: "others",      vimeoId: "1106914506", title: "Other Edit 1",              get embedUrl() { return vimeoUrl(this.vimeoId); } },
  { id: "o2", category: "others",      vimeoId: "1137229787", title: "Real Estate",               get embedUrl() { return vimeoUrl(this.vimeoId); } },
];

// ─── 404 Page ────────────────────────────────────────────────────────────────
export const NOT_FOUND = {
  heading: "404",
  message: "Oops! Page not found",
  backLabel: "Return to Home",
  backPath: "/",
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  exploreTitle: "Explore",
  connectTitle: "Let's Connect",
  indexTitle: "Let's Create Together",
  indexSubtitle: "Ready to bring your vision to life? Get in touch and let's start crafting something extraordinary.",
};
