import { Link } from "react-router-dom";

export default function ExploreBreadcrumb() {
  return (
    <div className="text-sm text-gray-500 flex items-center gap-2">
      <Link to="/">หน้าแรก</Link>
      <span>›</span>
      <span className="text-gray-900 font-medium">สูตรทั้งหมด</span>
    </div>
  );
}
