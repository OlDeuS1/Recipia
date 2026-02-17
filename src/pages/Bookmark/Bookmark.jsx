import Breadcrumb from "../../components/common/Breadcrumb";
import SectionHead from "../../components/common/SectionHead";
import BookmarkGrid from "./components/BookmarkGrid";

export default function Bookmark() {
    return (
      <section className="flex flex-col gap-10">
        <Breadcrumb />
        <SectionHead
          title="สูตรอาหารที่บันทึกไว้"
          kicker="รวมสูตรอาหารที่คุณชื่นชอบและบันทึกไว้เพื่อกลับมาทำในภายหลัง"
        />
        <BookmarkGrid/>
      </section>
    );
}