export default function FormSection({ title, action, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}
