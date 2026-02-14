import ExploreBreadcrumb from "../components/common/ExploreBreadcrumb";
import ExploreFilter from "../components/common/ExploreFilter";
import RecipeMasonry from "../components/common/RecipeMasonry";

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
    <>
      <main className="flex flex-col gap-10">
        <ExploreBreadcrumb />
        <ExploreFilter />
        <RecipeMasonry
          recipes={recipes}
          breakpointCols={breakpointColumnsObj}
        />
      </main>
    </>
  );
}

export default Explore;
