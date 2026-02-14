import Masonry from "react-masonry-css";
import { Search } from "lucide-react";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import ExploreRecipeCard from "../components/common/ExploreRecipeCard";
import { Link } from "react-router-dom";

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

function Explore() {
  const breakpointColumnsObj = {
    default: 4,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <Topbar />

      <main className="px-6 md:px-24 py-10 flex flex-col gap-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Link to="/">หน้าแรก</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">สูตรทั้งหมด</span>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
              อาหารไทย
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              30 นาที
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              1–2 คน
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="ค้นหาสูตรอาหาร..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {recipes.map((item) => (
            <ExploreRecipeCard key={item.title} item={item} />
          ))}
        </Masonry>
      </main>

      <Footer />
    </div>
  );
}

export default Explore;
