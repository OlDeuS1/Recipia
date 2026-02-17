import RecipeCard from "../../../components/common/RecipeCard";
import { Trash2 } from "lucide-react";

const recipes = [
  {
    title: "ผัดกะเพราหมูสับ",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default function BookmarkGrid() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((item) => (
        <RecipeCard
          key={item.title}
          item={item}
          fixed
          footer={
            <button
              className="w-full flex items-center justify-center gap-2
                 border border-gray-200 rounded-xl py-2
                 text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={() => handleRemove(item.id)}
            >
              <Trash2 size={16} />
              ลบออกจากที่บันทึก
            </button>
          }
        />
      ))}
    </div>
  );
}
