export default function FormSection({ title, action, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}
