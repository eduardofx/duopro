import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images
import cabinetImg1 from "@/assets/cabinet/IMG_3250.jpg";
import cabinetImg2 from "@/assets/cabinet/IMG_3262.jpg";
import cabinetImg3 from "@/assets/cabinet/IMG_3264.jpg";
import cabinetImg4 from "@/assets/cabinet/IMG_3412.jpg";
import cabinetImg5 from "@/assets/cabinet/IMG_3413.jpg";
import cabinetImg6 from "@/assets/cabinet/IMG_3434.jpg";
import cabinetImg7 from "@/assets/cabinet/IMG_3495.jpg";

import externalImg1 from "@/assets/external_walls/IMG_0130.jpg";
import externalImg2 from "@/assets/external_walls/IMG_0149.jpg";
import externalImg3 from "@/assets/external_walls/IMG_0776.jpg";
import externalImg4 from "@/assets/external_walls/IMG_8039.jpg";
import externalImg5 from "@/assets/external_walls/IMG_8040.jpg";

import internalImg1 from "@/assets/Internal/IMG_1754.jpg";
import internalImg2 from "@/assets/Internal/IMG_3496.jpg";
import internalImg3 from "@/assets/Internal/IMG_3497.jpg";
import internalImg4 from "@/assets/Internal/IMG_3531.jpg";
import internalImg5 from "@/assets/Internal/IMG_3532.jpg";
import internalImg6 from "@/assets/Internal/IMG_3536.jpg";
import internalImg7 from "@/assets/Internal/IMG_3576.jpg";
import internalImg8 from "@/assets/Internal/IMG_4467.jpg";
import internalImg9 from "@/assets/Internal/IMG_5474.jpg";

const categories = [
  "All",
  "Cabinet",
  "External Walls",
  "Internal",
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  // Cabinet
  { src: cabinetImg1, alt: "Cabinet painting project", category: "Cabinet" },
  { src: cabinetImg2, alt: "Cabinet refinishing", category: "Cabinet" },
  { src: cabinetImg3, alt: "Cabinet transformation", category: "Cabinet" },
  { src: cabinetImg4, alt: "Cabinet painting work", category: "Cabinet" },
  { src: cabinetImg5, alt: "Cabinet restoration", category: "Cabinet" },
  { src: cabinetImg6, alt: "Cabinet refinishing project", category: "Cabinet" },
  { src: cabinetImg7, alt: "Cabinet painting service", category: "Cabinet" },
  
  // External Walls
  { src: externalImg1, alt: "External wall painting", category: "External Walls" },
  { src: externalImg2, alt: "Exterior wall project", category: "External Walls" },
  { src: externalImg3, alt: "External wall refinishing", category: "External Walls" },
  { src: externalImg4, alt: "Exterior painting work", category: "External Walls" },
  { src: externalImg5, alt: "External wall transformation", category: "External Walls" },
  
  // Internal
  { src: internalImg1, alt: "Interior painting project", category: "Internal" },
  { src: internalImg2, alt: "Internal wall painting", category: "Internal" },
  { src: internalImg3, alt: "Interior refinishing", category: "Internal" },
  { src: internalImg4, alt: "Internal painting work", category: "Internal" },
  { src: internalImg5, alt: "Interior transformation", category: "Internal" },
  { src: internalImg6, alt: "Internal wall project", category: "Internal" },
  { src: internalImg7, alt: "Interior painting service", category: "Internal" },
  { src: internalImg8, alt: "Internal refinishing work", category: "Internal" },
  { src: internalImg9, alt: "Interior painting project", category: "Internal" },
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
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-muted"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
              src={selectedImage.src}
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
