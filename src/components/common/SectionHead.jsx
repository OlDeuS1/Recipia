function SectionHead({ title, kicker, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div className="space-y-2">
        {kicker && (
          <p className="text-sm text-gray-500 font-medium">{kicker}</p>
        )}

        <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default SectionHead;
