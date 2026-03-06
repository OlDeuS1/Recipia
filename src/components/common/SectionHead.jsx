function SectionHead({ title, kicker, action }) {
  return (
    <div className="flex flex-row items-end justify-between gap-4 flex-wrap">
      <div className="space-y-2 min-w-0">
        {kicker && (
          <p className="text-sm text-gray-500 font-medium">{kicker}</p>
        )}

        <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0 flex items-end">{action}</div>}
    </div>
  );
}

export default SectionHead;
