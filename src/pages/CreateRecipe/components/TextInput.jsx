export default function TextInput({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  label,
  id,
}) {
  const inputId = id || name;
  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
    </div>
  );
}
