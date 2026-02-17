export default function TextInput({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200
                 px-4 py-3 text-gray-900
                 focus:outline-none focus:ring-2 focus:ring-gray-900"
    />
  );
}
