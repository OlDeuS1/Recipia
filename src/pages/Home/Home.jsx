import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import CatalogSection from "./components/CatalogSection";
import CTASection from "./components/CTASection";

export default function Home() {
  const collections = [
    { title: "Plant Forward", media: "media-ten" },
    {
      title: "Weeknight Warmers",
      media: "media-eleven",
    },
    { title: "Sweet Escape", media: "media-twelve" },
    { title: "Seafood Studio", media: "media-thirteen" },
    { title: "Breakfast Rituals", media: "media-fourteen" },
    { title: "Cozy Bowls", media: "media-fifteen" },
  ];

  const recipes = [
    {
      title: "ผัดกะเพราหมูสับ",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      tag: "อาหารไทย",
      time: "35 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดไทยกุ้งสด",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      tag: "เส้น",
      time: "30 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดกะเพราหมูสับ",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "อาหารไทย",
      time: "35 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดไทยกุ้งสด",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "เส้น",
      time: "30 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดกะเพราหมูสับ",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      tag: "อาหารไทย",
      time: "35 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดไทยกุ้งสด",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "เส้น",
      time: "30 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดไทยกุ้งสด",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "เส้น",
      time: "30 นาที",
      serving: "2 ที่",
    },
    {
      title: "ผัดกะเพราหมูสับ",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      tag: "อาหารไทย",
      time: "35 นาที",
      serving: "2 ที่",
    },
  ];

  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <CategorySection collections={collections} />
      <CatalogSection catalog={recipes} />
      <CTASection />
    </main>
  );
}
