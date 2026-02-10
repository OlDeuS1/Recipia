function SectionHead({ title, kicker, action }) {
  return (
    <div className="flex justify-between items-end gap-4">
      <div>
        {kicker && <p className="text-gray-400 text-sm mb-1">{kicker}</p>}
        <h2 className="font-display text-2xl md:text-3xl font-bold m-0">
          {title}
        </h2>
      </div>
      {action ? action : null}
    </div>
  );
}

export default SectionHead
