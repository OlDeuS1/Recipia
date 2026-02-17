export default function TextArea({ placeholder, rows = 3 }) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200
                 px-4 py-3 text-gray-900
                 focus:outline-none focus:ring-2 focus:ring-gray-900"
    />
  );
}
