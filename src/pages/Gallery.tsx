import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Exterior Walls",
  "Deck",
  "Living Room",
  "Dining Room",
  "Kitchen",
  "Bathroom",
  "Bedroom",
  "Home Office",
  "Hallway",
  "Staircase",
  "Basement",
  "Laundry Room",
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Exterior wall painting", category: "Exterior Walls" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Exterior house painting", category: "Exterior Walls" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Beautiful deck refinishing", category: "Deck" },
  { src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80", alt: "Deck staining project", category: "Deck" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: "Modern living room painting", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", alt: "Living room refresh", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", alt: "Elegant dining room", category: "Dining Room" },
  { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80", alt: "Kitchen cabinet refinishing", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Kitchen makeover", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", alt: "Bathroom painting", category: "Bathroom" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Bathroom refresh", category: "Bathroom" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", alt: "Bedroom painting", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", alt: "Cozy bedroom", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80", alt: "Home office painting", category: "Home Office" },
  { src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80", alt: "Hallway painting", category: "Hallway" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Staircase refinishing", category: "Staircase" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", alt: "Basement renovation", category: "Basement" },
  { src: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?w=800&q=80", alt: "Laundry room painting", category: "Laundry Room" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 section-dark text-center px-6">
        <span className="badge-label">Portfolio</span>
        <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tight text-[hsl(var(--section-dark-foreground))]">
          Our <span className="text-primary">Gallery</span>
        </h1>
        <p className="text-[hsl(var(--section-dark-foreground)/0.7)] mt-4 max-w-xl mx-auto">
          Browse our completed projects across Westchester County and beyond.
        </p>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[60px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary-foreground text-sm font-semibold">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">
              No photos in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src.replace("w=800", "w=1600")}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
