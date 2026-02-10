import SectionHead from "../common/SectionHead";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mediaBackgrounds = {
  "media-sixteen":
    "url(https://images.unsplash.com/photo-1514516870926-2063a7a3988d?auto=format&fit=crop&w=700&q=80)",
  "media-seventeen":
    "url(https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=80)",
  "media-eighteen":
    "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80)",
  "media-nineteen":
    "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80)",
  "media-twenty":
    "url(https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80)",
  "media-twentyone":
    "url(https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80)",
  "media-twentytwo":
    "url(https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=700&q=80)",
  "media-twentythree":
    "url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=700&q=80)",
};

function CatalogSection({ catalog }) {
  return (
    <section className="flex flex-col gap-8">
      <SectionHead
        title="เมนูยอดนิยม"
        kicker="เมนูที่ได้รับความนิยมในสัปดาห์นี้"
        action={
          <button className="inline-flex items-center gap-1 bg-transparent border-none text-gray-900 font-semibold cursor-pointer hover:text-gray-700">
            ดูทั้งหมด
            <ArrowForwardIcon />
          </button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {catalog.map((item) => (
          <article
            key={item.title}
            className="bg-white rounded-3xl overflow-hidden border border-gray-200 flex flex-col"
          >
            <div
              className="h-40 bg-gray-100 bg-cover bg-center"
              style={{ background: mediaBackgrounds[item.media] }}
              aria-hidden="true"
            />
            <div className="p-4 flex flex-col gap-2">
              <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold w-fit">
                {item.tag}
              </span>
              <div className="flex gap-2 text-sm text-gray-900 opacity-75">
                <span>{item.time}</span>
                <span>•</span>
                <span>{item.rating}</span>
              </div>
              <h3 className="m-0 text-base font-semibold">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
